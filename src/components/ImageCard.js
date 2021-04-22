import React from 'react';

class ImageCard extends React.Component{
    constructor(props) {
        super(props);

        this.state = {spans: 0};
        this.imageRef = React.createRef();
    }

    componentDidMount() {
        this.imageRef.current.addEventListener('load', this.setSpans);

        // Can't do this immediately, as the image hasn't actually loaded
        // at this point yet, so it returns 0. vvvv
        // console.log(this.imageRef.current.clientHeight);
    }

    setSpans = () => {
        const height = this.imageRef.current.clientHeight;

        const spans = Math.ceil(height / 10);

        this.setState({ spans });
    }

    render() {
        const { description, id, urls } = this.props.image;

        return (            
            <div style= {{gridRowEnd: `span ${this.state.spans}`}}>
                <img 
                    ref={this.imageRef}
                    alt={description}
                    key={id} // Recommended to set a unique ID per item
                    src={urls.regular}
                />
            </div>
        )
    }
}

export default ImageCard;