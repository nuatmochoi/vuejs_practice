var cacheName = 'my-cache-v1';
var cacheFilelist = [ // index.js의 network 패널에 것들을 caching
    '/', // index.html
    '/app.js',
    '/teemo.png'
]

console.log('콘솔 추가 변경')

// #1 - 서비스 워커 설치(캐싱 파일 생성)
self.addEventListener('install', function(event){ // self : app.js에서의 window와 동일 - 바로 window 객체에 접근할 수 없기 때문에 사용
    console.log('서비스 워커 설치 완료')
    event.waitUntil( 
        caches.open(cacheName)
        .then(function(cache){
            console.log('캐시 생성 완료');
            return cache.addAll(cacheFilelist);
        })
        .catch(function(error){
            console.log(error);
        })
    );
})

// #2 - 서비스 워커의 네트워크 요청 가로채기 코드 작성
self.addEventListener('fetch', function(event){
    // localhost:5000/teemo.png 요청
    event.respondWith(
        caches.match(event.request)
        .then(function(response){
            if (response){
                return response;
            }
            return fetch(event.request);
        })
        .catch(function(){
            console.log(error);
        })
    )
})