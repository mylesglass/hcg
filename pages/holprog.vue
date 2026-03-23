<template>
  <div id="holprog">
    <section class="section">
      <div class="header-content">
        <h1>Gymnastics Holiday Programmes</h1>

        <div class="details-bar">
          <div class="detail-item"><strong>Price:</strong> $45 per day</div>
          <div class="detail-item"><strong>Time:</strong> 9AM – 3PM</div>
          <div class="detail-item"><strong>Ages:</strong> 5 – 12 years</div>
        </div>

        <p class="subtitle">
          Keep the kids moving and having fun these school holidays! Our holiday programme is the perfect way for tamariki aged 5–12 to burn off energy, learn new skills, and make new friends in a fun, safe, and supportive environment.
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
  background-color: #462d7e; // Deep Purple
  color: #ffffff; // White Text
  line-height: 1.6;
  min-height: 100vh;
}

.section {
  padding: 3rem 1rem;
  max-width: 1100px;
  margin: 0 auto;
}

.header-content {
  text-align: center;
  margin-bottom: 3rem;

  h1 {
    font-size: 2.8rem;
    font-weight: 800; // Bold
    margin-bottom: 1.5rem;
    color: #ffffff;
    text-transform: uppercase;
    letter-spacing: 1px;
  }

  .details-bar {
    display: flex;
    justify-content: center;
    gap: 2rem;
    margin-bottom: 2rem;
    padding: 1.2rem;
    background-color: rgba(255, 255, 255, 0.15); // Semi-transparent white
    border: 1px solid rgba(255, 255, 255, 0.3);
    border-radius: 50px;
    font-size: 1.2rem;

    @media (max-width: 768px) {
      flex-direction: column;
      gap: 0.5rem;
      border-radius: 15px;
    }
  }

  .subtitle {
    font-size: 1.15rem;
    max-width: 850px;
    margin: 0 auto;
    color: #f0f0f0;
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
    background: rgba(255, 255, 255, 0.1); // Subtle contrast
    padding: 2rem;
    border-radius: 12px;
    border: 1px solid rgba(255, 255, 255, 0.1);
    
    p {
      margin: 0;
    }
  }
}

// Ensure the external form script container doesn't get lost on dark background
#holidayprogram-form-container {
  background: white; 
  padding: 20px;
  border-radius: 12px;
  color: #333; // Form fields usually look best with dark text
}
</style>
