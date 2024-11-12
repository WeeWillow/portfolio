<script setup>

</script>

<template>
  <div class="card-container">
    <div class="case-card">
      <div class="card-cover" style="--clr:#fff;">
        <div class="card-box">
          <div class="img-box">
            <img src="@/assets/img/Dandy Frog.jpeg" alt="">
          </div>
          <div class="card-icon">
            <a href="#" class="icon-box">
              <span class="material-icons-outlined">
                arrow_outward
              </span>
            </a>
          </div>
        </div>
      </div>
      <div class="card-content">
        <h3>trust &amp; co.</h3>
        <p>Fill out the form and the algorithm will offer the right team of experts</p>
        <ul>
          <li style="--clr-tag:#d3b19a;" class="branding">branding</li>
          <li style="--clr-tag:#70b3b1;" class="packaging">packaging</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@use 'sass:color';

  h2 {
    text-transform: capitalize;
  }

  a {
    display: inline-block;
    text-decoration: none;
  }

  .case-card {
    &:nth-child(1) .card-box .card-icon .icon-box {
      background: #d3b19a;
    }

    ul {
      margin: 0;
      padding: 0;
      list-style-type: none;
      display: flex;
      flex-wrap: wrap;
      gap: 0.625rem;

      li {
        text-transform: uppercase;
        background: var(--clr-tag);
        color: #282828;
        font-weight: 700;
        font-size: 0.8rem;
        padding: 0.375rem .625rem;
        border-radius: .188rem;
      }

      .branding {
        color: color.adjust(#d3b19a, $lightness: -40%);
      }

      .packaging {
        color: color.adjust(#70b3b1, $lightness: -40%);
      }
    }
  }

</style>
