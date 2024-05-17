import React from "react";

const BlogTileComponent = ({ blog }) => {
  const { title, content, author, createdAt } = blog;
  return (
    <>
      <div className="container pt-4 blog-tile">
        <div className="container">
          <p className="h5">{title}</p>
          <div className="date-author">
            <p className="h6">{createdAt}</p>
            <p className="h6 ms-2">{author.username}</p>
          </div>
          <p className="intro">{content}</p>
        </div>
        <div>
          {/* <img
            src="src\assets\github.jpeg"
            alt="ThumbnailImage"
            className="thumbnail"
          /> */}
        </div>
      </div>
    </>
  );
};

export default BlogTileComponent;

/*
<h4>Getting Started with GitHub: A Beginner's Guide</h4>
      <p>
        Are you new to GitHub and wondering where to start? Look no further!
        GitHub is an incredible platform for developers, designers, and
        creatives to collaborate and share their work. In this post, we'll take
        you through the basics of getting started with GitHub. First things
        first, head over to (link unavailable) and sign up for a free account.
        You can use your email address or login with your Microsoft or Google
        account. Once you've signed up, choose a profile picture and bio to help
        others get to know you. This is your chance to showcase your personality
        and skills! Once you're logged in, you'll see your dashboard. This is
        where you'll find all your repositories (more on those later!), pull
        requests, and issues. A repository (or repo) is where you'll store your
        projects. Click the "+" button in the top right corner to create a new
        repository. Give it a name, description, and choose a license (if
        needed). Next, clone your repository to your local machine using the
        command line or GitHub Desktop. This will allow you to work on your
        project locally and sync it with GitHub. Open your repository in your
        favorite code editor and start coding! Remember to commit your changes
        regularly and push them to GitHub. GitHub is all about collaboration.
        Find open-source projects you're interested in and contribute to them.
        You can also invite others to collaborate on your own projects. Use
        GitHub Pages to host your website or blog for free! Explore GitHub's
        extensive documentation and guides, and join GitHub communities and
        forums for support and feedback. That's it! You've taken your first
        steps into the world of GitHub. Remember, practice makes perfect, so
        keep exploring and learning. Happy coding!
      </p>
*/
