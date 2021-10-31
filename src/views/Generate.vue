<template>
  <main id="main">

    <!-- ======= Breadcrumbs ======= -->
    <section class="breadcrumbs">
      <div class="container">

        <ol>
          <li><a href="index.html">Home</a></li>
          <li>Portfolio Details</li>
        </ol>
        <h2>Portfolio Details</h2>

      </div>
    </section><!-- End Breadcrumbs -->

    <!-- ======= Portfolio Details Section ======= -->
    <section id="portfolio-details" class="portfolio-details">
      <div class="container">

        <div class="row gy-4">

          <div class="col-lg-8">
            <!-- <div class="portfolio-details-slider swiper">
              <div class="swiper-wrapper align-items-center">

                <div class="swiper-slide">
                  <img src="assets/img/portfolio/portfolio-1.jpg" alt="">
                </div>

                <div class="swiper-slide">
                  <img src="assets/img/portfolio/portfolio-2.jpg" alt="">
                </div>

                <div class="swiper-slide">
                  <img src="assets/img/portfolio/portfolio-3.jpg" alt="">
                </div>

              </div>
              <div class="swiper-pagination"></div>
            </div> -->
            <pre>
              {{description}}
            </pre>
            <pre>{{prestasis}}</pre>
          </div>

          <div class="col-lg-4">
            <div class="portfolio-description">
              <h2>Deskripsi Diri</h2>
              <textarea v-model="description" class="form-control" id="" cols="auto" rows="10"></textarea>
              <!-- <p>
                Autem ipsum nam porro corporis rerum. Quis eos dolorem eos itaque inventore commodi labore quia quia. Exercitationem repudiandae officiis neque suscipit non officia eaque itaque enim. Voluptatem officia accusantium nesciunt est omnis tempora consectetur dignissimos. Sequi nulla at esse enim cum deserunt eius.
              </p> -->
            </div>
            <br>  
            <!-- <div class="portfolio-info">
              <h3>Project information</h3>
              <ul>
                <li><strong>Category</strong>: Web design</li>
                <li><strong>Client</strong>: ASU Company</li>
                <li><strong>Project date</strong>: 01 March, 2020</li>
                <li><strong>Project URL</strong>: <a href="#">www.example.com</a></li>
              </ul>
            </div> -->
            <div class="portfolio-info">
              <h3 class="text-center">Prestasi & Pengalaman Lomba</h3>
              <div>
                <div id="prestasi" @click="removePrestasi(index)" style="border-left: 5px solid #0d6efd; padding-left: 10px" v-for="(prestasi, index) in prestasis" :key="index">
                  <strong>{{prestasi.judul}}</strong>
                  <p>{{prestasi.instansi}}</p>
                </div>
              </div>
              <div class="card">
                <div class="card-body">
                  <input v-model="prestasi.judul" type="text" class="form-control mb-2" placeholder="Judul">  
                  <input @keyup.enter="addPrestasi" v-model="prestasi.instansi" type="text" class="form-control mb-2" placeholder="Instansi">  
                  <div class="d-grid gap-2">
                    <button @click="addPrestasi" class="btn btn-outline-primary" type="button">Tambahkan!</button>
                  </div>
                </div>
              </div>
            </div>

            <br>

            <div class="d-grid gap-2">
              <button class="btn btn-outline-primary btn-block" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                + Prestasi
              </button>
            </div>

            <!-- Second -->
            <!-- <div class="card">
              <div class="card-body">
                <h3>Prestasi</h3> 
              </div>
            </div> -->
            <div class="collapse" id="collapseExample">
              <div class="portfolio-info" >
                <h3>Prestasi</h3>
                <ul>
                  <li><strong>Category</strong>: Web design</li>
                  <li><strong>Client</strong>: ASU Company</li>
                  <li><strong>Project date</strong>: 01 March, 2020</li>
                  <li><strong>Project URL</strong>: <a href="#">www.example.com</a></li>
                </ul>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section><!-- End Portfolio Details Section -->

  </main><!-- End #main -->
</template>

<script>
export default {
  data(){
    return {
      data: '',
      nama: '',
      description: 'Autem ipsum nam porro corporis rerum. Quis eos dolorem eos itaque inventore commodi labore quia quia. Exercitationem repudiandae officiis neque suscipit non officia eaque itaque enim. Voluptatem officia accusantium nesciunt est omnis tempora consectetur dignissimos. Sequi nulla at esse enim cum deserunt eius.',
      prestasis: [],
      prestasi: {
        judul: '',
        instansi: ''
      }
    }
  },
  methods: {
    addPrestasi() {
      this.prestasis.push({
        judul: this.prestasi.judul,
        instansi: this.prestasi.instansi
      })
      this.prestasi.judul = ''
      this.prestasi.instansi = ''
    },
    removePrestasi(index) {
      this.prestasis.splice(index, 1)
    }
  }
}
</script>

<style>
#prestasi:hover {
  background-color: #f5f5f5;
}
</style>