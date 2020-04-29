/*!

=========================================================
* BLK Design System React - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/blk-design-system-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/blk-design-system-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import classnames from "classnames";
// plugin that creates slider
import Slider from "nouislider";
// react plugin used to create switch buttons
import Switch from "react-bootstrap-switch";

// reactstrap components
import {
  Button,
  Label,
  FormGroup,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col
} from "reactstrap";

class Description extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputFocus: false
    };
  }
  componentDidMount() {
  }
  render() {
    return (
      <div className="section section-basic" id="basic-elements">
        <img alt="..." className="path" src={require("assets/img/path1.png")} />
        <Container>
          <h3 className="title text-center">Welcome to my site. Have a look around.</h3>
          <h2 className="text-center">Site Links</h2>
          <Row>
            <Col>
              <Button color="primary" href="/about-me">
                About me
              </Button>
              <Button color="info" href="/quotes">
                Quotes
              </Button>
              <Button color="success" href="/keys">
                PGP Keys
              </Button>
            </Col>
          </Row>
        </Container>
        <Container>
          <h3 className="title text-center">Take a look at some useful Bitcointalk links while you're here.</h3>
          <Row>
            <Col>
              <Button color="primary" href="http://loyce.club/archive/topics/">
                Topics list by LoyceV
              </Button>
              <Button color="info" href="http://loyce.club/archive/posts/">
                Recent posts list by LoyceV
              </Button>
              <Button color="success" href="http://loyce.club/archive/oldposts/">
                Older posts list by LoyceV
              </Button>
              <Button color="warning" href="http://loyce.club/archive/members/">
                Members list by LoyceV
              </Button>
              <Button color="danger" href="https://bitcointalk.org/index.php?topic=703657.0">
                Rules (newbies read)
              </Button>
              <Button color="default" href="https://bpip.org/">
                BPIP member stats
              </Button>
            </Col>
          </Row>
        </Container>
        <Container>
          <h3 className="title text-center">Woah woah woah. You&apos;re a hacker?</h3>
          <p className="text-center">To clear the information, I am <strong>not</strong>&quot;a person who uses computers to gain unauthorized access to data&quot;. What I am is a brilliant scientist skilled computer expert
            (insert genius word here) who uses my technical knowledge to overcome a problem. Just your friendly reminder that not all hackers are bad, in fact, <em>most</em> hackers aren&apos;t bad, they have designed
            the technology that you use every day.</p>
          <p className="text-center">With <em>this</em> meaning of the word &quot;hacker&quot;, here are some hackers you may have heard of.</p>
           <ul>
             <li><a href="https://en.wikipedia.org/wiki/Bill_gates">Bill Gates</a> (made Windows)</li>
             <li><a href="https://en.wikipedia.org/wiki/Steve_Jobs">Steve Jobs</a> (made Apple)</li>
             <li><a href="https://en.wikipedia.org/wiki/Linus_torvalds">Linus Torvalds</a> (made the penguin system that all businesses use in their technology)</li>
             <li><a href="https://en.wikipedia.org/wiki/Tim_Berners-Lee">Tim Berners-Lee</a> (made the internet)</li>
             <li><a href="https://en.wikipedia.org/wiki/Alan_Kay">Alan Kay</a> (made laptops a thing)</li>
             <li><a href="https://en.wikipedia.org/wiki/Jeff_Bezos">Jeff Bezos</a> (Amazon)</li>
             <li><a href="https://en.wikipedia.org/wiki/Larry_Page">Larry Page</a> (Google)</li>
             <li><a href="https://en.wikipedia.org/wiki/Sergey_Brin">Sergey Brin</a> (also Google)</li>
             <li><a href="https://en.wikipedia.org/wiki/Karlheinz_Brandenburg">Karlheinz Brandenburg</a> (invented MP3 files)</li>
             <li><a href="https://en.wikipedia.org/wiki/Meg_Whitman">Meg Whitman</a> (eBay) (see, there are women hackers too)</li>
             <li><a href="https://en.wikipedia.org/wiki/Bill_Joy">Bill Joy</a> (made the popular text editor &quot;vi&quot;)</li>
             <li><a href="https://en.wikipedia.org/wiki/Mark_Zuckerberg">Mark Zuckerberg</a> (Facebook)</li>
             <li><a href="https://en.wikipedia.org/wiki/Sheryl_Sandberg">Sheryl Sandberg</a> (Facebook)</li>
             <li><a href="https://en.wikipedia.org/wiki/Susan_Wojcicki">Susan Wojcicki</a> (Youtube)</li>
             <li><a href="https://en.wikipedia.org/wiki/Ginni_Rometty">Ginni Rometty</a> (IBM)</li>
           </ul>
          <p className="text-center">All business leaders are also hackers, they don&apos;t work 8 hours at night making household names for nothing. Also this:</p>
          <Row>
            <Col md="12">
              <p className="text-center" className="blockquote blockquote-info">
                There is a community, a shared culture, of expert programmers and networking wizards that traces its history back through decades to the first time-sharing minicomputers and the earliest ARPAnet experiments. The members of this culture originated the term ‘hacker’.
                Hackers built the Internet. Hackers made the Unix operating system what it is today. Hackers make the World Wide Web work. If you are part of this culture, if you have contributed to it and other people in it know who you are and call you a hacker, you&apos;re a hacker.
                <br/>
                <br/>
                The hacker mind-set is not confined to this software-hacker culture. There are people who apply the hacker attitude to other things, like electronics or music — actually, you can find it at the highest levels of any science or art. Software hackers recognize these kindred
                spirits elsewhere and may call them ‘hackers’ too — and some claim that the hacker nature is really independent of the particular medium the hacker works in. But in the rest of this document we will focus on the skills and attitudes of software hackers, and the traditions
                of the shared culture that originated the term ‘hacker’.
                <br/>
                <br/>
                There is another group of people who loudly call themselves hackers, but aren&apos;t. These are people (mainly adolescent males) who get a kick out of breaking into computers and phreaking the phone system. Real hackers call these people ‘crackers’ and want nothing to do with
                them. Real hackers mostly think crackers are lazy, irresponsible, and not very bright, and object that being able to break security doesn&apos;t make you a hacker any more than being able to hotwire cars makes you an automotive engineer. Unfortunately, many journalists and writers
                have been fooled into using the word ‘hacker’ to describe crackers; this irritates real hackers no end.
                <br/>
                <br/>
                The basic difference is this: hackers build things, crackers break them. (<a href="http://www.catb.org/~esr/faqs/hacker-howto.html#what_is">Source</a>)
              </p>
            </Col>
          </Row>
          <p className="text-center">Crackers are people who shamelessly use the word hacker to promote their illegal activities and malware. Many of them are actually so-called &quot;script kiddies&quot; who cannot even compute the integral of x^2. Unlike <em>real</em> hackers,
            who have to know this because their software depends on this calculation. You will also catch crackers having a serious lack of volabulary, replacing letters with numbers inappropriately such as elite --&gt; l33t. I imagine one would react, &quot;what is
            this blantant mispelling of the English language? A third grader must have wrote this.&quot; You will also catch them saying nonsensical words such as &quot;LOL&quot;, &quot;lmao&quot; and &quot;kek&quot; that average people don&apos;t understand.</p>
          <p className="text-center">So if you ever get to meet any bad hackers, call them <strong>crackers</strong> instead. If they ask why, tell them I said so, let them deal with me 😎</p>
        </Container>
        <Container>
          <h3 className="title text-center">I&apos;m still not convinced that you&apos;re a &quot;good&quot; hacker.</h3>
          <p className="text-center">Well, I heard on the news that some guy distributed malware to everyone&apos;s devices. I also heard on the news about this guy who makes a product that everyone wants to use.</p>
        </Container>
        <Container>
          <h3 className="title text-center">But you don&apos;t have a product.</h3>
          <p className="text-center">Sure I do. It just hasn&apos;t been invented yet. I just need some time to do my thing, and the universe will send lieutenants to me. Besides, wouldn&apos;t you call Neo a protagonist?</p>
        </Container>
        <Container>
          <h3 className="title text-center">Can you hack my friend&apos;s Facebook account for me?</h3>
          <p className="text-center"><em>What.</em></p>
          <p className="text-center">Listen man, I don&apos;t hack people&apos;s accounts. I already told you, I&apos;m a good hacker.</p>
        </Container>
        <Container>
          <h3 className="title text-center">Can you help me turn on someone&apos;s webcam for me?</h3>
          <p className="text-center"><em>What the hell.</em></p>
          <p className="text-center">See above question.</p>
        </Container>
        <Container>
          <h3 className="title text-center">I still think you&apos;re a bad hacker. I&apos;ve only seen hackers banging keys on laptops.</h3>
          <p className="text-center">Fine. Here&apos;s the deal. If I get two <a href="https://www.amazon.com/slp/1080p-monitor/4mmjpony47s65ok">real monitors</a>, you start calling a good hacker, OK? Good.</p>
        </Container>
        <Container>
          <h3 className="title text-center">Ahem, who are you?</h3>
          <p className="text-center">See my <a href="/about-me">profile</a> for details.</p>
        </Container>
        <Container>
          <h3 className="title text-center">Nice to meet you, by the way.</h3>
          <p className="text-center"><a href="https://www.youtube.com/watch?v=lrdaj1W0hhE">May the Force be with you.</a></p>
          <p className="text-center">And while you&apos;re here, I invite you to join the <a href="https://dev.to">developer hacker cult</a>.</p>
        </Container>
        <Container>
          <h3 className="title text-center"><em>Ultima Ratio</em></h3>
          <p className="text-center">I am commited to using every last minute of my time to finishing my endevours, because my machine is very unstable (there&apos;s a backstory behind that if you&apos;re interested), and I could involuntarily go offline any day. So use me while you can.</p>
          <p className="text-center">Or, in the words of <a href="https://bitcointalk.org/index.php?action=profile;u=976210">nullius</a>: &#8220;I may soon be gone for a few days here and there. If so, I will catch up when I return; don&apos;t worry, I do not intend to disappear again!&#8221; (<a href="https://bitcointalk.org/index.php?topic=5244365.msg54320546#msg54320546">source</a>)</p>
        </Container>
        <Container>
          <div className="text-center">
              <img alt="..."  width="360" height="320" src={require("assets/img/morpheus.png")} />
          </div>
          <p className="text-center">So which one will it be?</p>
          <div className="text-center">
              <Button color="danger" href="/about-me#projects">
                Let&apos;s collab
              </Button>
              <Button color="info" href="https://google.com">
                Exit
              </Button>
          </div>
        </Container>
      </div>
    );
  }
}

export default Description;
