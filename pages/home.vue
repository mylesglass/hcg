<template>
  <div id="homepage">
    <section class="hero is-primary is-large">
      <!-- Hero head: will stick at the top -->
      <div class="hero-head">
        <nav class="navbar">
          <div class="container">
            <div class="navbar-brand">
              <a class="navbar-item">
                <img src="https://bulma.io/images/bulma-type-white.png" alt="Logo">
              </a>
              <span class="navbar-burger burger">
                <span></span>
                <span></span>
                <span></span>
              </span>
            </div>
            <div id="navbarMenuHeroA" class="navbar-menu">
              <div class="navbar-end">
                <a class="navbar-item is-active">
                  Home
                </a>
                <a class="navbar-item">
                  Programmes
                </a>
                <a class="navbar-item">
                  About
                </a>
                <a class="navbar-item">
                  Contact
                </a>
                <span class="navbar-item">
                  <a class="button is-primary is-inverted">
                    <span>Login</span>
                  </a>
                </span>
              </div>
            </div>
          </div>
        </nav>
      </div>

      <!-- Hero content: will be in the middle -->
      <div class="hero-body">
        <div class="container has-text-centered">
          <h1 class="title">
            {{ splash_heading }}
          </h1>
          <h2 class="subtitle">
            {{ splash_subtitle }}
          </h2>
          <a :href="splash_link" class="button is-inverted">{{ splash_button }}</a>
        </div>
      </div>

      <!-- footer: will stick at the bottom -->
      <div class="hero-foot">
      </div>
    </section>
    <section class="section">
      <div class="container">
        <p class="paragraph">The last, and probably the most dangerous problem encountered by wizards newly arrived in North America were the Scourers. As the wizarding community in America was small, scattered and secretive, it had as yet no law enforcement mechanism of its own. This left a vacuum that was filled by an unscrupulous band of wizarding mercenaries of many foreign nationalities, who formed a much-feared and brutal taskforce committed to hunting down not only known criminals, but anyone who might be worth some gold. As time went on, the Scourers became increasingly corrupt. Far away from the jurisdiction of their native magical governments, many indulged a love of authority and cruelty unjustified by their mission. Such Scourers enjoyed bloodshed and torture, and even went so far as trafficking their fellow wizards. The numbers of Scourers multiplied across America in the late seventeenth century and there is evidence that they were not above passing off innocent No-Majs as wizards, to collect rewards from gullible non-magic members of the community.</p>
        <p class="paragraph">Salem was significant within the magical community for reasons far beyond the tragic loss of life. Its immediate effect was to cause many witches and wizards to flee America, and many more to decide against locating there. This led to interesting variations in the magical population of North America, compared to the populations of Europe, Asia and Africa. Up until the early decades of the twentieth century, there were fewer witches and wizards in the general American population than on the other four continents. Pure-blood families, who were well-informed through wizarding newspapers about the activities of both Puritans and Scourers, rarely left for America. This meant a far higher percentage of No-Maj-born witches and wizards in the New World than elsewhere. While these witches and wizards often went on to marry and found their own all-magical families, the pure-blood ideology that has dogged much of Europe’s magical history has gained far less traction in America.</p>
        <p class="paragraph">The famous Salem Witch Trials of 1692-93 were a tragedy for the wizarding community. Wizarding historians agree that among the so-called Puritan judges were at least two known Scourers, who were paying off feuds that had developed while in America. A number of the dead were indeed witches, though utterly innocent of the crimes for which they had been arrested. Others were merely No-Majs who had the misfortune to be caught up in the general hysteria and bloodlust.</p>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  layout: 'home',

  async asyncData() {
    let content = await import('~/content/home.json');
    return content;
  }
}
</script>
