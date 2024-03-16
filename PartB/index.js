$(document).ready(function() {
  $('#dateId').on('keydown', (e) => {
      e.preventDefault();
  });
  
  const today = new Date().toISOString().substring(0, 10);

  $('#dateId').val(today);

  let intvl;
  let sec = 0;
  let min = 0;
  let hrs = 0;

  $('#start').click(async () => {
      await start();
  });

  $('#stop').click(async () => {
      await stop();
  });

  $('#reset').click(async () => {
      await stop();
      sec = 0;
      min = 0;
      hrs = 0;
      $('#timerId').text("00:00:00");
  });

  const start = () => {
      return new Promise((resolve) => {
          if (!intvl) {
            intvl = setInterval(calculateTime, 1000);
          }
          resolve();
      });
  };

  const calculateTime = () => {
    sec++;
      if (sec >= 60) {
        sec = 0;
          min++;
          if (min >= 60) {
            min = 0;
            hrs++;
          }
      }

      $('#timerId').text(`${String(hrs).padStart(2, '0')}:${String(min).padStart(2, '0')}:${String(sec).padStart(2, '0')}`);
  };


  const stop = () => {
      return new Promise((resolve) => {
          if (intvl) {
              clearInterval(intvl);
              intvl = null;
          }
          resolve();
      });
  };

});
