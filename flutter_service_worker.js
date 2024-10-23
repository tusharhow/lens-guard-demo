'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter.js": "f393d3c16b631f36852323de8e583132",
"main.dart.js": "dfa44a311924a2447b38e177411d0980",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin": "37e4e917c2191b2f31df0a5b0210b479",
"assets/fonts/MaterialIcons-Regular.otf": "d70476669db592cc8e8ea0e2177d90c0",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/assets/images/user4.jpg": "d2f88b349ab6a6fdbc59531681527533",
"assets/assets/images/glass2.png": "51d4ce252816928ce8f3e06b66bb17d9",
"assets/assets/images/glass8.png": "938710b383b7c391c83a365ca4cd4039",
"assets/assets/images/user3.png": "dcc8450130e26ab5e283938ca2ac55e7",
"assets/assets/images/user2.png": "20aff0b6d09b9eba56984d563d50044a",
"assets/assets/images/glass4.png": "0efe752dc6462da45b7a4a046d141562",
"assets/assets/images/splash_bg.jpeg": "dd12554bfd127725ef97e85e26eef74e",
"assets/assets/images/glass5.png": "938710b383b7c391c83a365ca4cd4039",
"assets/assets/images/glass1.png": "8de4ae2ec3d68fef911a25c5802a2df4",
"assets/assets/images/user1.png": "44601a8687f728ebb76e67c6125b6159",
"assets/assets/images/glass6.png": "90802c03e3974c1bf041a9fded9568ee",
"assets/assets/images/glass7.png": "938710b383b7c391c83a365ca4cd4039",
"assets/assets/images/glass3.png": "dd51c69be7c917f463bbc932b2b896ad",
"assets/assets/logos/mastercard.png": "13f2f9bd32bccd7946e6eaed92bdbbd8",
"assets/assets/logos/paypal.png": "3af370fda77e78e53862de528f358a70",
"assets/assets/logos/apple.png": "4095e5edf959350663014e25f133cabb",
"assets/assets/logos/google.png": "54d92439140ad747288601dac21b3c88",
"assets/assets/logos/payoneer.png": "63d66bd30e6cad84cb59f573e6d8ea77",
"assets/assets/logos/wise.png": "4d3b98f5e4ea558ef6af59484214dd9d",
"assets/assets/logos/logo.png": "f6a4cee62987f437cffa3e6de00c55ba",
"assets/assets/icons/Show.svg": "a30d98c15fd80d0da12195eb9fa6b6e0",
"assets/assets/icons/card.svg": "f377cfcb1187ea0e19486056762f952a",
"assets/assets/icons/Sale.svg": "d7874b9c06fcf5574049d6b557482e8f",
"assets/assets/icons/search.svg": "46e253dcb1c7a47a1c7aa7672f8d3f71",
"assets/assets/icons/Lock.svg": "900d707849312cb786a59349329ef9c1",
"assets/assets/icons/Category.svg": "e6b2c8fe8b25f4580dbc1ad0cc5c2293",
"assets/assets/icons/coupon.svg": "d3f998f5e655bd57c09fa887c6cb9640",
"assets/assets/icons/filter.svg": "699c51a5a6936223e15cbacee1f395aa",
"assets/assets/icons/top_rated.svg": "fe45d782d4546c27fb1bc789128b9701",
"assets/assets/icons/Shop.svg": "9f3f854d13fe3ba27f622c41b05068eb",
"assets/assets/icons/Address.svg": "48c219ea0cb0f11f5a1042a809e06c7c",
"assets/assets/icons/Bag.svg": "615e91a7ba7c2052f9e5b290b201fd25",
"assets/assets/icons/Bulb.svg": "b7c1d40c52eb1bdf87d156b6f8856329",
"assets/assets/icons/Logout.svg": "f463f1cbcac0477cc32953893c1ea5e3",
"assets/assets/icons/Bookmark.svg": "784d807e7f513529bdf913e5eee5c717",
"assets/assets/icons/Preferences.svg": "7106845e0fc04fccb96a13e87ebe7b6c",
"assets/assets/icons/Mail.svg": "68c6e924b585b3f3729c3682e9bb4445",
"assets/assets/icons/Notification.svg": "6ea9ca3f499134d6566807efbf60f51f",
"assets/assets/icons/discount_new.svg": "15961d370062416b96894393caac1229",
"assets/assets/icons/Order.svg": "7d32862fc35cb93679bf6362e1be11dc",
"assets/assets/icons/Return.svg": "cb668cd41ff0bda744045a5c908209cb",
"assets/assets/icons/eye.svg": "2a49454b5c4db824ed1d82838a363ff4",
"assets/assets/icons/Profile.svg": "7e56a4b92cfb5e87662fd7246f301283",
"assets/NOTICES": "87d78583ac817f2fee07c2b0e5292316",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.json": "e1bb77ecc58ca21710a318a0c8861523",
"assets/AssetManifest.bin.json": "ff16bd60185c353dd37dcecec4b18425",
"index.html": "d6fe59c0ecf1ee8ca90ef4d147707880",
"/": "d6fe59c0ecf1ee8ca90ef4d147707880",
"manifest.json": "c504bbca27a4d52a79a89c4abdaf35f1",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"version.json": "71419b8072be1fdd13eb649edc4ad3c9",
"flutter_bootstrap.js": "447284d5880942b89c8e5802bc090132"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
