const Post = ({ title, paragraph }) => {
  return (
    <div>
      {title == null || title === "" ? (
        ""
      ) : (
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{paragraph}</p>
            <a href="#" className="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default Post;
