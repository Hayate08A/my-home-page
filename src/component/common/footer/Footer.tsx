import "./Footer.scss";

type TFotterProps = {
  copyright: string;
};

const Footer = (props:TFotterProps) => {
  return (
    <div className="footer">
      <div className="footer__copyright">{props.copyright}</div>
    </div>
  );
};

export default Footer;
