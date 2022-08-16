'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "87d026996e9d37925d841f20e9390635",
"assets/FontManifest.json": "b0332b5b129f4f2145a2a3dd67a91114",
"assets/fonts/AGGRO-Bold.ttf": "db23c0c4136c806e2d2707c568a8c1b6",
"assets/fonts/AGGRO-Light.ttf": "fe56adedea0d86e2af0183f845340b73",
"assets/fonts/AGGRO-Regular.ttf": "59acc83322148939397765fe3648d3f1",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/fonts/NanumBarunGothic.ttf": "0384532820e984ca0dc4a140d11b12d4",
"assets/fonts/NanumBarunGothicBold.ttf": "3b18e24ea5237f4d6e2731c17ca7f164",
"assets/fonts/Pretendard-Black.ttf": "295efec41b5eccc61c6ba8e96cb816ed",
"assets/fonts/Pretendard-Bold.ttf": "0723ee5b938e98ab35833119ed9f973d",
"assets/fonts/Pretendard-ExtraBold.ttf": "8298442ed6b520e029dcbaeca0303393",
"assets/fonts/Pretendard-ExtraLight.ttf": "a7d69d904689baca1840e3cefe7c43c7",
"assets/fonts/Pretendard-Light.ttf": "b6b67941c3e77f24e4417129c9de8945",
"assets/fonts/Pretendard-Medium.ttf": "57a61eff81918a74f97ba593d08937eb",
"assets/fonts/Pretendard-Regular.ttf": "ad426f85daf320344fef4fb90d8c87d7",
"assets/fonts/Pretendard-SemiBold.ttf": "e911263ecc4de952c7c9704d522bf7fb",
"assets/fonts/Pretendard-Thin.ttf": "f150ad74a1f028fbe97b7de90039e817",
"assets/fonts/SUIT-Bold.ttf": "94556aa762faa10c1c4233191047d340",
"assets/fonts/SUIT-ExtraBold.ttf": "fbf5521ddb5be56490030c6856f78f16",
"assets/fonts/SUIT-ExtraLight.ttf": "1c1402b4c3b2cad4236e9f8f9e70dbbd",
"assets/fonts/SUIT-Heavy.ttf": "a4ba769b1fe69bf7fa57494a3d2514b4",
"assets/fonts/SUIT-Light.ttf": "f4ec7396c79a340bf73e1a78f6df3eaf",
"assets/fonts/SUIT-Regular.ttf": "ecaa6c57f4e7ed41445e86c876867096",
"assets/fonts/SUIT-SemiBold.ttf": "e90281959674f17c627f0016e7b9e70f",
"assets/images/app_icon.png": "8a047b46d4e6579a1ed45219b03fc029",
"assets/images/file_doc.png": "a2f536e0f83b8b409b9ec058f1cc0abb",
"assets/images/file_hwp.png": "f860be58a7e7b2c403a922c1e9856196",
"assets/images/file_mp4.png": "d27af01af631544f020f85966c8403e5",
"assets/images/file_pdf.png": "ab28a9d201436ac42221d7018894918b",
"assets/images/file_ppt.png": "95ab8c2414158dac2583da798269013c",
"assets/images/file_xls.png": "d0296b6af7a75699a6fccb85ffa15785",
"assets/images/icon/client_no_photo.png": "53a75e955e69f3c07fe8059454122eb1",
"assets/images/icon/icon_alarm.png": "11dde4b4340f1bacafe87ca895238a99",
"assets/images/icon/icon_back_arrow.png": "3b12a64959f152792e913df50df0503c",
"assets/images/icon/icon_camera.png": "d1a6817c15a7e68facf0ad07b4ebc239",
"assets/images/icon/icon_chat.png": "d507d785dfe35730de85967af6f74d49",
"assets/images/icon/icon_check_box.png": "99a3ad8ff365c7ac58268363abacac2b",
"assets/images/icon/icon_check_box_on.png": "70f0a21c8e8393efe26f165cb0575102",
"assets/images/icon/icon_clear.png": "01b640feb22658506366cacb90276c50",
"assets/images/icon/icon_clear_picture.png": "82e4dbb54ae271aebbdcc3474c361cae",
"assets/images/icon/icon_company_name.png": "5c0016565f370db6dec5e387302e8df4",
"assets/images/icon/icon_custom_profile.png": "ee3033bfafb228e8c510cefbf5037203",
"assets/images/icon/icon_edit_picture.png": "ac8f24c4e4a43e36c48044a94abf6016",
"assets/images/icon/icon_emoji.png": "6a0f47fea5d712927cef3a91fb1e1a80",
"assets/images/icon/icon_file.png": "61a585d7df1c41eafe109545a27dd458",
"assets/images/icon/icon_first_date.png": "061f568dd0fe533803d5b8c3cf018b53",
"assets/images/icon/icon_friends.png": "90dbf5687db5efd606ed1129b2579557",
"assets/images/icon/icon_group.png": "6d7573b990818c862353481e1f48bcec",
"assets/images/icon/icon_menu.png": "b86c60a311beb5de22030db2092ad4b4",
"assets/images/icon/icon_onetoone.png": "b37d7630716f642f84fac860b79d9506",
"assets/images/icon/icon_pencil.png": "2ef50bce4a14eb83c4ee73a0b66c5d7f",
"assets/images/icon/icon_search.png": "c32f7df0c8e04e5f35eb9a4737d1fea6",
"assets/images/icon/icon_telephone.png": "81fcfecac3bede1f23509e5de38eb3da",
"assets/images/icon/item_chat.png": "ac691db81dbe74f95e68ce814323688a",
"assets/images/icon/item_friends.png": "21ffc214f8ba7d49536d4fb35f56c004",
"assets/images/icon/item_logout.png": "b4bbfd5399b71fe8bb7f74f5f4b3043b",
"assets/images/icon/medical_no_photo.png": "ae1db329412420041813be12a41a4ace",
"assets/images/icon/mobile_connect.png": "e53a2332fa80294f7af13871715b9e69",
"assets/images/icon/my_no_photo.png": "f9dbcae2f1081297297357c2e37e25e0",
"assets/images/icon/no_connect.png": "ab276f730b8adea2b2558e1de200d042",
"assets/images/icon/pc_connect.png": "1f9efa2d49b30fc5c879090a2c059254",
"assets/images/icon/pic_image1.png": "a9eda4521dd71608cb5c57690c414bd4",
"assets/images/icon/pic_image2.png": "fbbce7ac4221235b59f18472845d4428",
"assets/images/icon/pic_image3.png": "ad00b8e8c33533f72907272e3aa2f5e1",
"assets/images/icon/planner_no_photo.png": "1ee73cfab4872abc3499bea5b8ecffdc",
"assets/images/img_not_available.jpeg": "1c98fa4a13575d5854365f27b8bf66dc",
"assets/images/notification_icon.png": "d065ea785abff3c4dfb102870ce5b609",
"assets/images/no_photo.png": "05ff9f516cd72215bb4cff04ba189708",
"assets/images/splash.gif": "a4933e83153955cfd5cb14f90186c220",
"assets/images/sticker/mimi1.gif": "e461080d38ed74cc7b8c0e4500e51f09",
"assets/images/sticker/mimi2.gif": "82a783353a27abe59feafd40bc686af1",
"assets/images/sticker/mimi3.gif": "477fc8ddd40d200fe8f2635b5151a873",
"assets/images/sticker/mimi4.gif": "6b65742393c65511ba223ec388c85ecc",
"assets/images/sticker/mimi5.gif": "609127cb5129f8e218fb57f059497c87",
"assets/images/sticker/mimi6.gif": "1ce35a6b3c21cc308a7683dfbea81c63",
"assets/images/sticker/mimi7.gif": "ace546bd302229af3a0c7e7221d2dc10",
"assets/images/sticker/mimi8.gif": "6646a3dec849498313a17c7de5d2ea5c",
"assets/images/sticker/mimi9.gif": "93545692d74dbe8e0538abeeccbf679c",
"assets/images/work_notread.png": "9ac925dc3819cec33281bb186d1c0017",
"assets/images/work_read.png": "692c7ac290b35891a5da657cd108affc",
"assets/NOTICES": "03e469cdb7a348ca5591606a23e928c6",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fluttertoast/assets/toastify.js": "e7006a0a033d834ef9414d48db3be6fc",
"assets/packages/sn_progress_dialog/assets/completed.png": "4f4ec717f6bb773c80db76261bb367c3",
"assets/packages/sn_progress_dialog/example/assets/completed.png": "3e65bf4ed5f8b0f808b57fecdb26b7d1",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"firebase-messaging-sw.js": "40b1b5d3ebc6d3cca1c5d1042c0a60f7",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"img.gif": "50c5e3e79b276c92df6cc52caeb464f0",
"index.html": "0a5a67dd81d8e0e8834e52c1b7fd2270",
"/": "0a5a67dd81d8e0e8834e52c1b7fd2270",
"main.dart.js": "2a9f5bdc19c1a2eb25a0dc42039347de",
"manifest.json": "2b5ba2778470d390063c60bd60a04198",
"version.json": "08b8eb61b274f462c6b2978d93c998e1"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
