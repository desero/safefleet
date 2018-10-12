<template>
  <footer class="footer">
    <div class="cols">
      <div class="col">
        <a href="https://www.safefleet.eu/" class="logo"><icon size="48">safeleet</icon></a>
      </div>
      <div class="col">
        <p class="copyright">&copy; 2017-{{ new Date().getFullYear() }} SafeFleet.</p>
        <p class="presslabs"><icon>eu_flag_dark</icon>Engineered in Europe, deployed worldwide.</p>
      </div>
    </div>
  </footer>
</template>

<script>
import Icon from './Icon'

export default {
  components: { Icon }
}
</script>

<style lang="scss">
@import "./variables";
@import "./colors";

.footer {
  text-align: left;
  margin-top: 40px;
  font-size: 14px;
  padding: 100px 40px;
  @media screen and (min-width: 768px) {
    padding: 100px;
  }
  .cols {
    display: flex;
    flex-direction: column;
    @media screen and (min-width: 768px) {
      flex-direction: row;
    }
    .col {
      flex: 1;
      margin-right: 40px;
    }
  }
  .footer-nav {
    list-style: none;
    margin: 0 0 24px 0;
    padding: 0;
    a {
      text-decoration: none;
      color: $gray-3;
      &:hover {
        color: $secondColor;
        text-decoration: underline;
      }
    }
    &.socials {
      display: flex;
      li {
        flex: 1;
        i {
          font-size: 24px;
        }
      }
      a {
        color: lighten($secondColor, 10%);
      }
      a:hover {
        color: $secondColor;
        text-decoration: none;
      }
    }
  }
  h6 {
    font-size: 12px;
    letter-spacing: 1.4px;
  }
  h6, p {
    margin-top: 0;
    line-height: 24px;
    margin-bottom: 24px;
  }
  li {
    line-height: 24px;
  }
  p.presslabs {
    margin-left: 30px;
    text-indent: -16px;
    i {
      font-size: 24px;
      margin-right: 8px;
      color: $purple-1;
      vertical-align: middle;
    }
  }
  .logo {
    text-decoration: none;
    margin-bottom: 30px;
    display: block;
    i {
      font-size: 48px;
      display: block;
      color: $green-1;
    }
  }
}
</style>
