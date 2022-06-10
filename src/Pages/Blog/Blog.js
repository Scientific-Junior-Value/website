import "./Blog.css";
import Background from "../../Components/Background/Background";
import Animation from "../../Components/Animation/Animation";

function Blog() {
  return (
    <Animation>
      <Background
        class='background-no-margin'
        title="Blog"
        desc="Acompanha a rubrica nova da Scientific, assim como fun facts e curiosidades!"
      />
    </Animation>
  );
}

export default Blog;
