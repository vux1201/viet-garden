<template>
  <div class="bg-dark">
    <section class="sub-bg">
      <div class="sub-head">
        <a href="/home"><i class="fa fa-home"></i> Trang chủ </a>
        <a href="#">Blog - Tin Tức</a>
        <span><a href="#">Video</a></span>
      </div>
    </section>
    <div class="main">
      <div class="content-page detail-news">
        <div class="title">
          <h1>Video</h1>
        </div>
        <div class="hot-news">
          <div class="hot-news-large">
            <div class="img-news-hot">
              <!-- <v-carousel
                  cycle
                  height="400"
                  hide-delimiter-background
                  show-arrows="hover"
                >
                  <v-carousel-item
                    v-for="(slide, i) in slides"
                    :key="i"
                    :src="slide.src"
                  >
                  </v-carousel-item>
                </v-carousel> -->
              <iframe
                src="https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2FsinhvienITVietNam%2Fvideos%2F548462343689952%2F&show_text=false&width=476&t=0"
                width="476"
                height="476"
                style="border: none; overflow: hidden"
                scrolling="no"
                frameborder="0"
                allowfullscreen="true"
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
              ></iframe>
            </div>
          </div>
        </div>
        <div class="news-page"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style scoped>
iframe {
  margin-left: 20%;
}
</style>
