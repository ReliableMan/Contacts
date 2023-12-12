<template>
  <div
    style="background-color: rgb(232, 228, 228)"
    class="d-flex justify-content-center align-items-center">
    <div class="main">
      <span class="stand"></span>
        <div class="cat">
          <div class="body"></div>
            <div class="head">
              <div class="ear"></div>
                <div class="ear"></div>
            </div>
            <div class="face">
                <div class="nose"></div>
                  <div class="whisker-container">
                    <div class="whisker"></div>
                    <div class="whisker"></div>
                  </div>
            <div class="whisker-container">
              <div class="whisker"></div>
              <div class="whisker"></div>
            </div>
            </div>
        <div class="tail-container">
          <div class="tail">
            <div class="tail">
              <div class="tail">
                <div class="tail">
                  <div class="tail">
                    <div class="tail">
                      <div class="tail"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SleepingCat',
};
</script>

<style lang="scss" scoped>
@import '@/assets/styles/sleeping-cat.styles.scss'
</style>
