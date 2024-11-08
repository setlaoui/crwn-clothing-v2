import "./category-preview.styles.scss";

const CategoryPreview = ({title, products}) => {
    return (
        <div className="category-preview">
            <h2>
                <span className="title">
                    {title.toUpperCase()}
                </span>
            </h2>
            <div className="preview">
                {
                    <products className="filter"></products>
                }
            </div>
        </div>
    )
};

export default CategoryPreview;
