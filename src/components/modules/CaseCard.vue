<script setup>

</script>

<template>
  <section>
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
  </section>
</template>

<style scoped lang="scss">
  section {

    padding-block: min(20vh, 2rem);
    width: calc(min(76.5rem, 90%));
    margin-inline: auto;
    color: #111;

    h2 {
      text-transform: capitalize;
    }
  
    a {
      display: inline-block;
      text-decoration: none;
    }
  
    .card-container {
      margin-top: 5em;
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(16rem, 1fr));
      gap: 2rem;
      
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
      }
      
      .card-content {
        padding: 0.938rem 0.625rem;
        
        h3 {
          text-transform: capitalize;
          font-size: clamp(1.5rem, 1.3909rem + 0.4364vw, 1.8rem);
        }
        
        p {
          margin: 0.625rem 0 1.25rem;
          color: #565656;
        }
      }
    }
    
    .card-cover {
      position: relative;
      width: inherit;
      height: 18.75rem;
      background: var(--clr);
      border-radius: 1.25rem;
      border-bottom-right-radius: 0;
      overflow: hidden;
    }
  }
}


</style>
