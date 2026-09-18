HERO CLASS PGSD H 2026 — FINAL PACKAGE

site/   = website utama untuk pgsdheroclass.web.id
admin/  = website admin terpisah
supabase/ = SQL/database/storage setup

Fitur: login admin, dashboard, edit Home/Class/Events/Memories/Class Corner, Struktur Kelas + foto, PJ Mata Kuliah + foto, Anggota Kelas + foto, Events + foto, Memories + foto, dan Supabase sebagai database/storage.

Setup:
1. Jalankan supabase/schema.sql di Supabase SQL Editor.
2. Jalankan supabase/photo_revision.sql setelah schema.sql jika file tersedia.
3. Upload ISI folder site/ ke root hosting website utama.
4. Upload ISI folder admin/ ke hosting/subdomain admin.
5. Keduanya memakai project Supabase yang sama.
6. Buat akun admin di Supabase Authentication.

Domain:
Website: https://pgsdheroclass.web.id
Admin: https://admin.pgsdheroclass.web.id

Jangan masukkan service_role/secret key ke frontend.
