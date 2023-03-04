function tebakZodiak() {
    var tanggal = new Date(document.getElementById("tgl_lahir").value);
    var bulan = tanggal.getMonth() + 1;
    var tanggal_lahir = tanggal.getDate();
  
    if (bulan == 1 && tanggal_lahir >= 20 || bulan == 2 && tanggal_lahir <= 18) {
      zodiak = "Aquarius";
    } else if (bulan == 2 && tanggal_lahir >= 19 || bulan == 3 && tanggal_lahir <= 20) {
      zodiak = "Pisces";
    } else if (bulan == 3 && tanggal_lahir >= 21 || bulan == 4 && tanggal_lahir <= 19) {
      zodiak = "Aries";
    } else if (bulan == 4 && tanggal_lahir >= 20 || bulan == 5 && tanggal_lahir <= 20) {
      zodiak = "Taurus";
    } else if (bulan == 5 && tanggal_lahir >= 21 || bulan == 6 && tanggal_lahir <= 20) {
      zodiak = "Gemini";
    } else if (bulan == 6 && tanggal_lahir >= 21 || bulan == 7 && tanggal_lahir <= 22) {
      zodiak = "Cancer";
    } else if (bulan == 7 && tanggal_lahir >= 23 || bulan == 8 && tanggal_lahir <= 22) {
      zodiak = "Leo";
    } else if (bulan == 8 && tanggal_lahir >= 23 || bulan == 9 && tanggal_lahir <= 22) {
      zodiak = "Virgo";
    } else if (bulan == 9 && tanggal_lahir >= 23 || bulan == 10 && tanggal_lahir <= 22) {
      zodiak = "Libra";
    } else if (bulan == 10 && tanggal_lahir >= 23 || bulan == 11 && tanggal_lahir <= 21) {
      zodiak = "Scorpio";
    } else if (bulan == 11 && tanggal_lahir >= 22 || bulan == 12 && tanggal_lahir <= 21) {
      zodiak = "Sagittarius";
    } else if (bulan == 12 && tanggal_lahir >= 22 || bulan == 1 && tanggal_lahir <= 19) {
      zodiak = "Capricorn";
    }
  
    var hasil = document.getElementById("hasil");
    hasil.innerHTML = "Zodiak Anda adalah " + zodiak ;
}