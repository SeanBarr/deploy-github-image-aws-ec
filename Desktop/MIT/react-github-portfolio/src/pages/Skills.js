import { Container } from 'react-bootstrap';
import GitHubCalendar from 'react-github-calendar';
import ReactTooltip from 'react-tooltip';


const Skills = () => {
    const colorTheme = {
      level4: '#ff001e',
      level3: '#59359a',
      level2: '#6c757d;',
      level1: '#62fc03',
      level0: '#6ea8fe',
    }
    return (
      <>
        <h1 className='text-white d-flex align-items-center justify-content-center fw-bold text-large'>
        My Skills
        </h1>
        <main class='bg-light min-vh-100 py-5'>
          <div class='container'>
            <div class='row gy-5 gx-md-5 px-lg-5'>
              <div class='col-12 col-md-6 col-xl-4 col-xxl-3 d-flex'>
                <a
                  href='https://developer.mozilla.org/en-US/docs/Web/HTML'
                  target='_blank'
                  class='card-link'
                >
                  <article class='card shadow'>
                    <div class='d-flex justify-content-center pt-3'>
                      <img
                        class='w-25'
                        src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain.svg'
                      />
                    </div>
                    <div class='card-body'>
                      <h3 class='card-title text-small'>HTML</h3>
                      <p class='card-text text-small'>
                        The HyperText Markup Language, or HTML is the standard
                        markup language for documents designed to be displayed
                        in a web browser.
                        <br></br>It can be assisted by technologies such as
                        Cascading Style Sheets and scripting languages such as
                        JavaScript.<br></br>
                      </p>
                    </div>
                  </article>
                </a>
              </div>
              <div class='col-12 col-md-6 col-xl-4 col-xxl-3 d-flex'>
                <a
                  href='https://developer.mozilla.org/en-US/docs/Web/CSS'
                  target='_blank'
                  class='card-link'
                >
                  <article class='card shadow'>
                    <div class='d-flex justify-content-center pt-3'>
                      <img
                        class='w-25'
                        src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain.svg'
                      />
                    </div>
                    <div class='card-body'>
                      <h3 class='card-title text-small'>CSS</h3>
                      <p class='card-text text-small'>
                        Cascading Style Sheets "CSS" is a style sheet language
                        used for describing the presentation of a document
                        written in a markup language such as HTML.
                        <br></br>CSS is a cornerstone technology of the World
                        Wide Web, alongside HTML and JavaScript.<br></br>
                      </p>
                    </div>
                  </article>
                </a>
              </div>
              <div class='col-12 col-md-6 col-xl-4 col-xxl-3 d-flex'>
                <a
                  href='https://getbootstrap.com/docs/5.1/getting-started/introduction/'
                  target='_blank'
                  class='card-link'
                >
                  <article class='card shadow'>
                    <div class='d-flex justify-content-center pt-3'>
                      <img
                        class='w-25'
                        src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-plain.svg'
                      />
                    </div>
                    <div class='card-body'>
                      <h3 class='card-title text-small'>Bootstrap</h3>
                      <p class='card-text text-small'>
                        Bootstrap is a free and open-source CSS framework
                        directed at responsive, mobile-first front-end web
                        development. It contains CSS- and JavaScript-based
                        design templates for typography, forms, buttons,
                        navigation, and other interface components.<br></br>
                      </p>
                    </div>
                  </article>
                </a>
              </div>
              <div class='col-12 col-md-6 col-xl-4 col-xxl-3 d-flex'>
                <a
                  href='https://developer.mozilla.org/en-US/docs/Web/JavaScript'
                  target='_blank'
                  class='card-link'
                >
                  <article class='card shadow'>
                    <div class='d-flex justify-content-center pt-3'>
                      <img
                        class='w-25'
                        src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg'
                      />
                    </div>
                    <div class='card-body'>
                      <h3 class='card-title text-small'>JavaScript</h3>
                      <p class='card-text text-small'>
                        JavaScript, often abbreviated as JS, is a programming
                        language that conforms to the ECMAScript specification.
                        JavaScript is high-level, often just-in-time compiled
                        and multi-paradigm. It has dynamic typing,
                        prototype-based object-orientation and first-class
                        functions.
                      </p>
                    </div>
                  </article>
                </a>
              </div>
              <div class='col-12 col-md-6 col-xl-4 col-xxl-3 d-flex'>
                <a
                  href='https://reactjs.org/docs/getting-started.html'
                  target='_blank'
                  class='card-link'
                >
                  <article class='card shadow'>
                    <div class='d-flex justify-content-center pt-3'>
                      <img
                        class='w-25'
                        src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg'
                      />
                    </div>
                    <div class='card-body'>
                      <h3 class='card-title text-small'>React</h3>
                      <p class='card-text text-small'>
                        React is a free and open-source front-end JavaScript
                        library for building user interfaces or UI components.
                        It is maintained by Facebook and a community of
                        individual developers and companies. React can be used
                        as a base in the development of single-page or mobile
                        applications.
                      </p>
                    </div>
                  </article>
                </a>
              </div>
              <div class='col-12 col-md-6 col-xl-4 col-xxl-3 d-flex'>
                <a
                  href='https://git-scm.com/doc'
                  target='_blank'
                  class='card-link'
                >
                  <article class='card shadow'>
                    <div class='d-flex justify-content-center pt-3'>
                      <img
                        class='w-25'
                        src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-plain.svg'
                      />
                    </div>
                    <div class='card-body'>
                      <h3 class='card-title text-small'>Git</h3>
                      <p class='card-text text-small'>
                        Git is software for tracking changes in any set of
                        files, usually used for coordinating work among
                        programmers collaboratively developing source code
                        during software development. Its goals include speed,
                        data integrity, and support for distributed, non-linear
                        workflows.<br></br>
                      </p>
                    </div>
                  </article>
                </a>
              </div>
            </div>
          </div>
          <Container>
            <h2 className='d-flex align-items-center justify-content-center pt-5 pb-5'>
              My GitHub Calender
            </h2>
            <GitHubCalendar
              username='SeanBarr'
              theme={colorTheme}
              blockSize={15}
              blockMargin={4}
              fontSize={16}
              dateFormat='dd/MMM/yyyy'
              children={<ReactTooltip html />}
            />
          </Container>
        </main>
      </>
    )
}

export default Skills
