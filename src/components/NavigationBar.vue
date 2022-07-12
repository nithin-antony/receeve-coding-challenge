<template>
  <div class="sidebar" :class="isOpened ? 'open' : ''">
    <div class="logo-details" style="margin: 6px 14px 0 14px;">
      <img class="img-icon" :src="profileImg" alt="profileImg" />
      <div class="logo_name">
        receeve
      </div>
      <span id="btn" class="icon" @click="isOpened = !isOpened"
        ><font-awesome-icon :icon="isOpened ? 'bars-staggered' : 'bars'"
      /></span>
    </div>
    <ul class="nav-list" style="overflow: visible;">
      <span v-for="(menuItem, index) in menuItems" :key="index">
        <li>
          <router-link :to="menuItem.link" exact-active-class="active">
            <span class="icon"><font-awesome-icon :icon="menuItem.icon"/></span>
            <span class="links_name">{{ menuItem.name }}</span>
          </router-link>
          <span class="tooltip">{{ menuItem.tooltip || menuItem.name }}</span>
        </li>
      </span>
    </ul>
    <div v-if="isLoggedIn" class="profile">
      <div class="profile-details">
        <h4>{{ profileName }}</h4>
      </div>
      <span class="icon" id="log_out"
        ><font-awesome-icon icon="arrow-right-from-bracket"
      /></span>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
@Component
export default class NavigationBar extends Vue {
  @Prop()
  msg!: string;

  isOpened = false;
  isLoggedIn = true;
  profileName = "Nithin";
  menuItems = [
    {
      link: "/",
      name: "Dashboard",
      tooltip: "Dashboard",
      icon: "chart-column",
    },
    {
      link: "/accounts",
      name: "Accounts",
      tooltip: "Accounts",
      icon: "receipt",
    },
  ];

  profileImg: string = require("../assets/logo.png");
}
</script>

<style scoped>
.active {
  background-color: #007cba;
}
.sidebar {
  position: relative;
  display: flex;
  flex-direction: column;
  position: fixed;
  left: 0;
  top: 0;
  height: 100%;
  min-height: min-content;
  width: 78px;
  background: #111e41;
  z-index: 99;
  transition: all 0.5s ease;
}
.sidebar.open {
  width: 250px;
}
.sidebar .logo-details {
  height: 60px;
  display: flex;
  align-items: center;
  position: relative;
  justify-content: space-between;
}
.sidebar .logo-details .img-icon {
  opacity: 0;
  transition: all 0.5s ease;
}
.sidebar .logo-details .logo_name {
  color: #fff;
  font-size: 20px;
  font-weight: 600;
  opacity: 0;
  transition: all 0.5s ease;
}
.sidebar.open .logo-details .img-icon,
.sidebar.open .logo-details .logo_name {
  opacity: 1;
}
.sidebar .logo-details #btn {
  cursor: pointer;
  position: absolute;
}
.sidebar.open .logo-details #btn {
  position: relative;
  transition: all 0.4s ease;
  cursor: pointer;
  transition: all 0.5s ease;
}
.sidebar .nav-list {
  padding: 0;
  margin-top: 20px;
}
.sidebar li {
  position: relative;
  margin: 8px 0;
  list-style: none;
}
.sidebar li .tooltip {
  position: absolute;
  top: -20px;
  left: calc(100% + 15px);
  z-index: 3;
  background: #007cba;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.3);
  padding: 6px 12px;
  border-radius: 4px;
  font-size: 15px;
  font-weight: 400;
  opacity: 0;
  white-space: nowrap;
  pointer-events: none;
  transition: 0s;
  color: #fff;
}
.sidebar li:hover .tooltip {
  opacity: 1;
  pointer-events: auto;
  transition: all 0.4s ease;
  top: 50%;
  transform: translateY(-50%);
}
.sidebar.open li .tooltip {
  display: none;
}

.sidebar li a {
  display: flex;
  height: 100%;
  border-radius: 12px;
  align-items: center;
  text-decoration: none;
  transition: all 0.4s ease;
  margin: 10px;
}

.sidebar li a:hover {
  background: #546cae;
}
.sidebar li a .links_name {
  color: #fff;
  font-size: 15px;
  font-weight: 400;
  white-space: nowrap;
  opacity: 0;
  pointer-events: none;
  transition: 0.4s;
}
.sidebar.open li a .links_name {
  opacity: 1;
  pointer-events: auto;
}
.sidebar li a:hover .links_name,
.sidebar li a:hover i {
  transition: all 0.5s ease;
}
.sidebar li i {
  height: 50px;
  line-height: 50px;
  font-size: 18px;
  border-radius: 12px;
}
.sidebar div img {
  height: 45px;
  width: 45px;
  object-fit: cover;
  border-radius: 6px;
  margin-right: 10px;
}
@media (max-width: 420px) {
  .sidebar li .tooltip {
    display: none;
  }
}
.icon {
  color: #fff;
  height: 60px;
  min-width: 50px;
  font-size: 20px;
  text-align: center;
  line-height: 60px;
}
.sidebar div.profile {
  position: fixed;
  bottom: 0;
  height: 60px;
  width: 78px;
  background: #007aff;
  transition: all 0.5s ease;
  overflow: hidden;
}
.sidebar.open div.profile {
  width: 250px;
}
.sidebar div .profile-details {
  font-size: 15px;
  font-weight: 400;
  color: #fff;
  white-space: nowrap;
}
.sidebar .profile #log_out {
  position: absolute;
  top: 50%;
  right: 0;
  transform: translateY(-50%);
  background: #007aff;
  width: 100%;
  height: 60px;
  line-height: 60px;
  border-radius: 0px;
  transition: all 0.5s ease;
}
.sidebar.open .profile #log_out {
  width: 50px;
  background: #007aff;
  opacity: 1;
}
.sidebar.open .profile:hover #log_out {
  opacity: 1;
}
.sidebar.open .profile #log_out:hover {
  opacity: 1;
  color: #cf2e2e;
}
.sidebar .profile #log_out:hover {
  color: #cf2e2e;
}
</style>
