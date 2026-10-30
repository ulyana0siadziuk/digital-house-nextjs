import PropTypes from "prop-types";
import { Alert } from "react-bootstrap";

function RenderInfo({ mode, generatedAt, extra }) {
  const isSsr = mode === "SSR";

  return (
    <Alert variant={isSsr ? "info" : "success"} className="mb-4">
      <div className="fw-semibold">
        Режим рендеринга: {mode} (
        {isSsr ? "getServerSideProps" : "getStaticProps"})
      </div>
      <div>
        Страница сгенерирована: <strong>{generatedAt}</strong>
      </div>
      {extra ? <div className="small mt-1">{extra}</div> : null}
    </Alert>
  );
}

RenderInfo.propTypes = {
  mode: PropTypes.oneOf(["SSR", "SSG"]).isRequired,
  generatedAt: PropTypes.string.isRequired,
  extra: PropTypes.string,
};

export default RenderInfo;
