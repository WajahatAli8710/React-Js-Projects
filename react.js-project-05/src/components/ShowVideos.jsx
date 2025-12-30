import Card from "./Card";

// import img1 from '../assets/cardImage1.png'
// import img2 from '../assets/cardImage2.png'
// import img3 from '../assets/cardImage3.png'
// import img4 from '../assets/cardImage4.png'

const ShowVideos = () => {
  const cardData = [
    {
      description: "Midnight Mischief Squad",
      series: "S1 Ep-1",
      time: "30min 45sec",
      progressBar: "50%",
      image:"../src/assets/cardImage1.png"
    },
    {
      description: "Legends of the Emerald Mist",
      series: "S1 Ep-3",
      time: "29min 40sec",
      progressBar: "30%",
      image:"../src/assets/cardImage2.png"
    },
    {
      description: "Rise of the Last Guardian",
      series: "S2 Ep-1",
      time: "28min 45sec",
      progressBar: "60%",
      image:"../src/assets/cardImage3.png"
    },
    {
      description: "creature protects young boy",
      series: "S1 Ep-3",
      time: "20min 10sec",
      progressBar: "80%",
      image:"../src/assets/cardImage4.png"
    },
  ];

  return (
    <div className="showVideos">
      <div className="top">
        <h2>Continue Watching</h2>
        <button className="btn">See All</button>
      </div>
      <div className="cards">
        {cardData.map(function (elem, idx) {
          return <Card key={idx} data={elem} />;
        })}
      </div>
    </div>
  );
};

export default ShowVideos;
