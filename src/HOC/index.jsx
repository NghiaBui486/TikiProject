import React from 'react';

export function propsProxyHOC(WrappedComponent) {
    return class PropsProxy extends React.Component {
        render() {
            const newProps = { type: 'props proxy' };

            return <WrappedComponent {...this.props} {...newProps}/>
        }
    }
}