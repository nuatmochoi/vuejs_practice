<template>
  <div>
    <button @click="askPermission">푸시 구독</button>
    <div>
      <p>{{ JSON.stringify(pushData) }}</p>
    </div>
  </div>
</template>

<script>
import {
  urlB64ToUint8Array,
  saveEndpointToFirebase
} from "../utils/firebase-db";

export default {
  data() {
    return {
      isPushSupport: false,
      isSubscribed: false
    };
  },
  methods: {
    async askPermission() {
      try {
        // 브라우저의 Notification API를 이용해 알람 허용 여부 질의
        const result = await Notification.requestPermission();
        console.log(result);
        if (result === "granted") {
          // 알람을 허용했다면 브라우저에 등록되어 있는 서비스 워커 정보를 획득
          const swReg = await navigator.serviceWorker.ready;
          // 푸시 메시지 수신을 위해 서비스 워커 정보를 DB에 저장
          await this.subscribePush(swReg);
        }
      } catch (error) {
        console.log(error);
      }
    },
    async subscribePush(registeredServiceWorker) {
      try {
        const SERVER_KEY =
          "BEBFgL8R8SGu87RY9qmE4tdfbk1QIOwzfwa9DhYUWx8RErAtFoZRJpCotjIQ8U_C9Eb1PnHCKlT8iaM9sd2JTgo";
        const encryptedServerKey = urlB64ToUint8Array(SERVER_KEY);
        // 브라우저에 등록되어 있는 서비스 워커의 푸시 구독 API 호출
        const result = await registeredServiceWorker.pushManager.subscribe({
          userVisibleOnly: true,
          applicationServerKey: encryptedServerKey
        });
        this.pushData = result;
        console.log(result);
        // 푸시를 구독한 브라우저의 엔드포인트 추출
        const endpoint = result.endpoint.split("send/").pop();
        //const email = this.$store.state.user.email;
        // 브라우저 엔드포인트(유니크한 키 값)와 이메일을 파이어베이스 DB에 저장
        await saveEndpointToFirebase(endpoint, "최성우");
        console.log("The endpoint is saved");
      } catch (error) {
        console.log(error);
      }
    },
    checkBrowserSupport() {
      if ("serviceWorker" in navigator && "Notification" in window) {
        this.isPushSupport = true;
      }
    },
    async checkSubscription() {
      const swReg = await navigator.serviceWorker.ready;
      const result = await swReg.pushManager.getSubscription();
      this.isSubscribed = result ? true : false;
    }
  },
  created() {
    this.checkBrowserSupport();
    this.checkSubscription();
  }
};
</script>

<style></style>
