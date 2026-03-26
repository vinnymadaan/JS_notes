function showConcept(id) {
      document.querySelectorAll('.concept').forEach(el => el.style.display = 'none');
      document.getElementById(id).style.display = 'block';
      window.scrollTo({ top: document.getElementById(id).offsetTop - 50, behavior: 'smooth' });
    }

    function toggleAnswer(el) {
      const ans = el.querySelector('.answer');
      ans.style.display = ans.style.display === 'block' ? 'none' : 'block';
    }

    function scrollToTopics() {
      document.getElementById("topics").scrollIntoView({ behavior: "smooth" });
    }