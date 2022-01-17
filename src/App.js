import banner from "./image/banner.png";
import './style.css';

function App() {
  return (
    <>
    <div>
    <header>
        <p className="brand">Taoufik</p>
        <nav>
        <ul className="navigation-list">
          <a href="#"><li>HOME</li></a>
          <a href="#Services"><li>ABOUT</li></a>
          <a href="#Services"><li className="dropdown-btn">SERVICE&#8595;
            <ul className="dropdown">
              <li>more</li>
              <li>more</li>
              <li>more</li>
            </ul>
          </li></a>
          <a href="#video"><li>VIDEO</li></a>
          <a href="#contact"><li>CONTACT</li></a>
        </ul>
      </nav>
      </header>
      <section className="profile">
          <div className="profile-text">
            <h2>WELCOME!</h2>
            <h1>I AM A WEB DEVELOPER</h1>
            <p>
              I'm a future Web Developer with alot of motivation to code more. My objective is
               is to create  Websites with a good user experience.
              <a href="https://gomycode.com/TN-FR/home">more...</a>
            </p>
          </div>
        </section>
 <h1 className="title red">Taoufik BENNOUR</h1>
 <img src={banner} />
 <br/>
 <img src="/image/imageInPublic.jpg" className='img'/>
 <br/>
<video width="320" height="240" autoplay loop>
 <source src="/image/taoufikBr.mp4" type="video/mp4" />
</video>
</div>
</>

  );
}

export default App;
