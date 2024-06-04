import React from "react";
import styles from "./Comment.module.css";
import { assets } from "../../assets/assets";
import ShowStar from "../ShowStar/ShowStar";
import { useParams } from "react-router-dom";

function Comment() {
  const [save, setSave] = React.useState(false);
  const { id } = useParams();
  const userId = "131314";

  return (
    <div className={styles.comment}>
      <div className={styles.commentHeader}>
        <div className={styles.commentFirtPart}>
          <div className={styles.commentImg}>
            <img src={assets.userTest1} alt="" />
          </div>
          <div className={styles.commentNome}>
            <p>Lua Riad</p>
            <p>20/08/2021</p>
          </div>

          <div className={styles.commentRating}>
            <ShowStar sizeStar="1.25rem" />
          </div>
        </div>

        <div className={styles.icons}>
          {save ? (
            <button onClick={() => setSave(!save)}>
              <img src={assets.unsave} alt="" />
            </button>
          ) : (
            <button onClick={() => setSave(!save)}>
              <img src={assets.save} alt="" />
            </button>
          )}

          <button>
            <img src={assets.report} alt="" />
          </button>
        </div>
      </div>
      <div className={styles.commentContent}>
        <p>
          Lorem ipsum dolor sit amet consectetur. Vitae commodo convallis ac ut.
          Ut felis blandit auctor commodo sed potenti mauris. Ante aliquam quam
          orci mattis ut morbi gravida tellus. Eu metus blandit leo quam velit
          vel scelerisque rhoncus. Donec eu posuere sed sit feugiat facilisis.
          Netus ac sagittis quam pharetra a in. Purus dictum pellentesque sit
          sapien elit tincidunt. Maecenas dictum est mi integer tellus egestas
          feugiat mattis. Massa pretium a blandit eleifend purus. Et adipiscing
          pretium nibh enim vestibulum cras massa dolor massa. Fermentum aliquam
          tempor congue vulputate a. Bibendum in vitae urna mauris. Venenatis
          sodales orci pretium vel sagittis odio viverra. Sit ornare id integer
          ullamcorper sollicitudin arcu ultricies. Sodales urna id mi adipiscing
          justo risus ullamcorper sed ut. Cursus mauris natoque morbi velit
          pellentesque bibendum integer congue amet. Integer a nec proin mi
          tortor lorem mauris et aliquet. Nulla faucibus convallis id felis. Sit
          varius consequat vivamus vitae sit non vestibulum. Mauris nisi eu
          lobortis id in. Sed leo adipiscing scelerisque ut et dolor. Mauris
          dignissim dignissim in orci. Nunc pulvinar lobortis mauris vulputate
          elementum tincidunt nunc. Lacus eget ac gravida nullam fames tincidunt
          posuere viverra. Curabitur eget lobortis tincidunt aliquam adipiscing
          nunc cursus rhoncus proin. Scelerisque libero ante imperdiet dui quis
          pellentesque. Et dictum ut mollis id pellentesque. Posuere maecenas
          aliquam nec vulputate.
        </p>
      </div>

      {userId === id && (
        <div className={styles.commentFooter}>
          <button>
            <img src={assets.excludePurple} alt="" />
            DELETE
          </button>
        </div>
      )}
    </div>
  );
}

export default Comment;
