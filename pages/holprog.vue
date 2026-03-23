<template>
  <div id="holprog">
    <section class="section">
      <div class="header-content">
        <h1>Gymnastics Holiday Programme</h1>

        <div class="details-bar">
          <div class="detail-item"><strong>Price:</strong> $45 per day</div>
          <div class="detail-item"><strong>Time:</strong> 9AM – 3PM</div>
          <div class="detail-item"><strong>Ages:</strong> 5 – 12 years</div>
        </div>

        <p class="subtitle">
          Keep the kids moving and having fun! Our holiday programme is the perfect way for tamariki to burn off energy, learn new skills, and make friends in a safe, supportive environment. 
          <br><br>
          <strong>Spaces fill up fast, so be sure to book early!</strong>
        </p>
      </div>

      <div class="columns-container">
        <div class="column">
          <h3>Active Gymnastics</h3>
          <p>Kids explore the gym through guided circuits, trampoline time, and structured coaching. Perfect for beginners and regular members alike to learn new skills.</p>
        </div>
        <div class="column">
          <h3>Flex those Creative Muscles</h3>
          <p>We balance physical mahi with creative activities and team games. This variety ensures every child finds something they love doing all day long.</p>
        </div>
        <div class="column">
          <h3>Easy for Parents</h3>
          <p>Running 9:00 AM – 3:00 PM with an experienced team, you can drop the kids off for an active adventure while you head to work or take a breather.</p>
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
  color: #333333;
  line-height: 1.6;
}

.section {
  padding: 3rem 1rem;
  max-width: 1100px;
  margin: 0 auto;
}

.header-content {
  text-align: center;
  margin-bottom: 3.5rem;

  h1 {
    font-size: 3.8rem;
    font-weight: 800;
    margin-bottom: 1.5rem;
    color: #462d7e;
  }

  .details-bar {
    display: flex;
    justify-content: center;
    gap: 2.5rem;
    margin-bottom: 2.5rem;
    padding: 1.2rem;
    background-color: #f3f4f6;
    border-radius: 50px;
    font-size: 1.15rem;

    @media (max-width: 768px) {
      flex-direction: column;
      gap: 0.8rem;
      border-radius: 15px;
    }
  }

  .subtitle {
    font-size: 1.15rem;
    max-width: 800px;
    margin: 0 auto;
  }
}

.columns-container {
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  margin-bottom: 4rem;

  .column {
    flex: 1;
    min-width: 280px;
    font-size: 1rem;
    background: #fafafa;
    padding: 2rem;
    border-radius: 12px;
    border: 1px solid #eeeeee;
    text-align: center; // Centering text for a cleaner look
    
    h3 {
      font-weight: 700;
      margin-bottom: 1rem;
      color: #462d7e; // Using your purple as an accent for titles
    }

    p {
      margin: 0;
    }
  }
}
</style>
