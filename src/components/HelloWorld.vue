<script setup>
import { ref } from 'vue'

defineProps({
  msg: String,
})

const count = ref(0)
</script>

<template>
 <header>
    <!-- Navigasi -->
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="#">Logo</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <a class="nav-link" href="#features">Features</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#about">About</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
    <!-- Hero Section -->
    <nav className="sticky-top navbar navbar-light bg-light shadow-sm" style="padding-left: 260px;">
        <a className="navbar-brand">
            <img src="https://cdn-icons-png.flaticon.com/512/149/149071.png" width="30" height="30" className="d-inline-block align-top" alt="">
            Data User
        </a>
    </nav>
  </header>

  <section id="features">
    <div class="container">
      <h2>Features</h2>
      <div class="row">
        <div class="col-md-4">
          <h3>Feature 1</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vitae turpis nunc.</p>
        </div>
        <div class="col-md-4">
          <h3>Feature 2</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vitae turpis nunc.</p>
        </div>
        <div class="col-md-4">
          <h3>Feature 3</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vitae turpis nunc.</p>
        </div>
      </div>
    </div>
  </section>

  <section id="about">
    <div class="container">
      <h2>About Us</h2>
      <div class="row">
        <div class="col-md-6">
          <img src="path/to/about-image.jpg" alt="About Image" class="img-fluid">
        </div>
        <div class="col-md-6">
          <h3>Our Story</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vitae turpis nunc.</p>
        </div>
      </div>
    </div>
  </section>

  <section id="contact">
    <div class="container">
      <h2>Contact Us</h2>
      <div class="row">
        <div class="col-md-6">
          <form>
            <div class="form-group">
              <label for="name">Name</label>
              <input type="text" class="form-control" id="name" placeholder="Enter your name">
            </div>
            <div class="form-group">
              <label for="email">Email</label>
              <input type="email" class="form-control" id="email" placeholder="Enter your email">
            </div>
            <div class="form-group">
              <label for="message">Message</label>
              <textarea class="form-control" id="message" rows="5" placeholder="Enter your message"></textarea>
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
          </form>
        </div>
        <div class="col-md-6">
          <h3>Contact Information</h3>
          <p>Phone: 123-456-7890</p>
          <p>Email: info@example.com</p>
          <p>Address: 123, Street Name, City, Country</p>
        </div>
      </div>
    </div>
  </section>

  <footer>
    <div class="container">
      <p>&copy; 2023 Your Company. All rights reserved.</p>
    </div>
  </footer>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
