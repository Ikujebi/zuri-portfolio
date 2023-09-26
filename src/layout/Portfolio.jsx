import React from 'react';
import { Link } from 'react-router-dom';
import register from '../assets/images/student-reg.png'
import css from '../assets/images/firstCss (2).png'
import form from '../assets/images/sail-form.png'
import movie from '../assets/images/movie-web2.png'
import mathsprint from '../assets/images/mathsprint.png'
import student from '../assets/images/student-portal.png'
import admin from '../assets/images/sail-admin.png'
import calc from '../assets/images/calc.png'
import gallery from '../assets/images/z-gallery.png'




function Portfolio() {

    const journalEntries = [
        {
          imageSrc: register,
          title: 'A REACT DIGITAL STUDENT REGISTER',
          link: 'https://dashing-figolla-474e10.netlify.app',
          description: 'Taking student register digital so students/workers cannot lie about time in/time out and easily accessible in case of an emergency',
        },
        {
          imageSrc: css,
          title: 'DREAMS COME TRUE, MY FIRST CSS PROJECT',
          link: 'https://golden-crumble-517967.netlify.app/',
          description: 'MY DREAM FINALLY CAME TRUE',
        },
        {
          imageSrc: form,
          title: 'A Registration Form',
          link: "https://student-management-system-ioti.onrender.com/",
          description: 'i built aregistration form for the bootcamp i finished from,to replace the google form they were using',
        },
        {
          imageSrc: movie,
          title: 'A MovieBox',
          link: "https://zuri-movies-loet.vercel.app/movies/240",
          description: 'i built a MovieBox as a task for my internship program at zuri HNGx',
        },
        {
          imageSrc: mathsprint,
          title: 'mathsprint game',
          link: 'https://golden-crumble-517967.netlify.app/',
          description: 'A maths game with vanila js,html and css',
        },
        {
          imageSrc: student,
          title: 'An LMS Student portal',
          link: "https://sail-student-dashboard.vercel.app/signin",
          description: 'i was part of a team of like minded individual that built the student portal for SAIL inovation lab',
        },
        {
          imageSrc: admin,
          title: 'An LMS Admin portal',
          link: 'https://ssmp-admin-portal.vercel.app/',
          description: 'i was part of a team of like minded individual that built the admin portal for SAIL inovation lab',
        },
        {
          imageSrc: calc,
          title: 'DREAMS COME TRUE, MY FIRST Calculator PROJECT',
          link: "https://calculator-taupe-eight-21.vercel.app/",
          description: 'i was part of a team of like minded individual that built the student portal for SAIL inovation lab',
        },
        {
          imageSrc: gallery,
          title: 'DnD Gallery',
          link: 'https://newgallery.vercel.app/',
          description: 'A DRAG N DROP Gallery i built as an assignment in zuri HNGx internship',
        },
      
      ];

  return (
    <div id="journal" className="flex flex-col justify-center items-center px-2">
      <div className="container">
        <div className="section-title text-center">
          <h2>WHAT I HAVE DONE</h2>
        </div>
      </div>

      <div className="container">
        <div className="journal-block">
          <div className="flex flex-wrap -m-4">
            {journalEntries.map((entry, index) => (
              <div key={index} className="col-lg-4 col-md-6 p-4">
                <div className="journal-info">
                  <Link to={entry.link} className="popup-img">
                    <img src={entry.imageSrc} alt="img" />
                  </Link>
                  <div className="journal-txt">
                    <h4>
                      <Link to={entry.link}>{entry.title}</Link>
                    </h4>
                    <p className="separator">{entry.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
