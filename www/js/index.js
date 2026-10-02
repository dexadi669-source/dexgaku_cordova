/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

// Tunggu hingga Cordova siap digunakan
document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {
    console.log('Running cordova-' + cordova.platformId + '@' + cordova.version);
    
    // Inisialisasi event listener kecurangan saat device siap
    simInisialisasiDeteksiKeluarApp();
}

// ==========================================
// LOGIKA DETEKSI KELUAR / KECURANGAN (PWA & APK)
// ==========================================

function simHandleAppBlur() {
    console.log("Aplikasi ditinggalkan / kehilangan fokus (Notifikasi/Floating Window/App Switch)");
    // Masukkan logika kamu saat kecurangan terdeteksi (misal: jalankan timer hitung mundur atau beri peringatan)
    if (typeof simMulaiHitungMundurKeluar === 'function') {
        simMulaiHitungMundurKeluar();
    }
}

function simHandleAppFocus() {
    console.log("Aplikasi kembali fokus");
    // Masukkan logika saat pengguna kembali ke aplikasi
    if (typeof simBatalHitungMundurKeluar === 'function') {
        simBatalHitungMundurKeluar();
    }
}

function simHandleVisibilityChange() {
    if (document.hidden) {
        simHandleAppBlur();
    } else {
        simHandleAppFocus();
    }
}

function simInisialisasiDeteksiKeluarApp() {
    // 1. Event Native Cordova (Menangkap notification bar & floating window)
    document.addEventListener("pause", simHandleAppBlur, false);
    document.addEventListener("resume", simHandleAppFocus, false);

    // 2. Event dari Plugin Background Mode
    if (window.cordova && cordova.plugins && cordova.plugins.backgroundMode) {
        cordova.plugins.backgroundMode.on('activate', simHandleAppBlur);
        cordova.plugins.backgroundMode.on('deactivate', simHandleAppFocus);
    }

    // 3. Fallback Browser / Web API
    document.addEventListener("visibilitychange", simHandleVisibilityChange);
    window.addEventListener("blur", simHandleAppBlur);
    window.addEventListener("focus", simHandleAppFocus);
}

function simHapusDeteksiKeluarApp() {
    document.removeEventListener("pause", simHandleAppBlur, false);
    document.removeEventListener("resume", simHandleAppFocus, false);

    if (window.cordova && cordova.plugins && cordova.plugins.backgroundMode) {
        cordova.plugins.backgroundMode.off('activate', simHandleAppBlur);
        cordova.plugins.backgroundMode.off('deactivate', simHandleAppFocus);
    }

    document.removeEventListener("visibilitychange", simHandleVisibilityChange);
    window.removeEventListener("blur", simHandleAppBlur);
    window.removeEventListener("focus", simHandleAppFocus);

    if (typeof simBatalHitungMundurKeluar === 'function') {
        simBatalHitungMundurKeluar();
    }
}
