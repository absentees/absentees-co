<template>
  <div class="layout">
    <header class="header">
      <h1 class="title">Scott Blissett - Designer/Developer</h1>
    </header>
    <slot/>
  </div>
</template

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<style lang="scss">
html {
  background-color: #F7F7F7;
	font-size: 62.5%; 
	font-family: sans-serif;
	@media (max-width: 425px) {
		font-size: 60%;
	}
}

body {
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	font-size: 1.4rem;
	color: #000;
}

a {
	color: inherit;
}


h1 {
	font-weight: 500;
	line-height: 1em;
	font-size: 1.6rem;
}

h2 {
	font-weight: 500;
}

h3 {
	font-weight: 400;

}

p {
	font-weight: 400;
	line-height: 1.4em;
	font-size: 1.4rem; // letter-spacing: -0.03em;
}

</style>
