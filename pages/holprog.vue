<template>
  <div id="holprog">
    <section class="section">
      <div class="header-content">
        <h1>Gymnastics Holiday Programmes</h1>
        <p class="subtitle">
          Keep the kids moving and having fun these school holidays! Our holiday programme is the perfect way for tamariki aged 5–13 to burn off energy, learn new skills, and make new friends in a fun, safe, and supportive environment.
          <br><br>
          <strong>Spaces fill up fast every break, so be sure to get your booking in early to join in.</strong>
        </p>
      </div>

      <div class="columns-container">
        <div class="column">
          <p>Children spend their day exploring the gym through guided circuits, trampoline time, structured coaching, and free play. Whether they are a total beginner or a regular member, our coaches ensure everyone has a chance to challenge themselves and learn something new!</p>
        </div>
        <div class="column">
          <p>It isn’t just about gymnastics! We balance out the physical mahi with creative activities, team-building games, and supervised free play. This variety keeps the energy high and ensures every child finds something they love doing throughout the day.</p>
        </div>
        <div class="column">
          <p>Our programme runs from 9:00 AM to 3:00 PM every weekday during the school holidays. With our central location and experienced coaching team, you can drop the kids off knowing they are in for a day full of active adventure while you head to work or take a breather.</p>
        </div>
      </div>

      <script src="https://harbourcitygym.friendlymanager.com/js/loadform/holidayprogram.js"></script>
    </section>
  </div>
</template>

<script>
export default {
  
}
</script>

<style lang="scss" scoped>
#holprog {
  background-color: #ffffff;
  color: #333;
  line-height: 1.6;
}

.section {
  padding: 2rem 1rem;
  max-width: 1000px;
  margin: 0 auto;
}

.header-content {
  text-align: center;
  margin-bottom: 3rem;

  h1 {
    font-size: 2.5rem;
    margin-bottom: 1.5rem;
    color: #1a1a1a;
  }

  .subtitle {
    font-size: 1.1rem;
    max-width: 800px;
    margin: 0 auto;
  }
}

.columns-container {
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  margin-bottom: 3rem;

  .column {
    flex: 1;
    min-width: 250px; // Ensures it stacks on mobile
    font-size: 0.95rem;
    background: #f9f9f9;
    padding: 1.5rem;
    border-radius: 8px;
  }
}
</style>
