import * as React from 'react';

interface MyComponentProps {
    info: {
        name?: string,
        age?: number
    };
}

const MyComponent: React.SFC<MyComponentProps> = (props) => {
    const {name, age} = props.info;
    return(
        <div>
            <h1>
                {name}
            </h1>
        </div>
    );
}

MyComponent.defaultProps = {
    info: {
        name: 'bits',
        age: 19
    }
}

export default MyComponent;