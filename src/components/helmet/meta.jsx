import { Helmet } from 'react-helmet-async'


export default function MetaTags(props) {
    const { title, desc, type } = props;

    return (
        <Helmet>
            <title>{title || `${process.env.REACT_APP_SITENAME}`}</title>
            <meta name="title" content={title || `${process.env.REACT_APP_SITENAME}`} />
            <meta name="description" content={desc || process.env.REACT_APP_META_DESCRIPTION} />
            <meta property="og:type" content={type || "website"} />
        </Helmet>
    );
};