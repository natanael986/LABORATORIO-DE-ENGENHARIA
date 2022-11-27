import React from 'react';

import GetDerivedStateFromProps from './getDerivedStateFromProps';
import ShouldComponentUpdate from './shouldComponentUpdate';
import GetSnapshotBeforeUpdate from './getSnapshotBeforeUpdate';
import ComponentDidUpdate from './componentDidUpdate';
import ComponentWillUnmount from './componentWillUnmount';

function ExibirComponente() {
    return (
        <div>
            <div>
                <div>
                    <ul>
                        <li>getDerivedStateFromProps</li>
                    </ul>
                    <div>
                        <GetDerivedStateFromProps nome="Junior" />
                    </div>
                </div>
                <div>
                    <ul>
                        <li>shouldComponentUpdate</li>
                    </ul>
                    <div>
                        <ShouldComponentUpdate />
                    </div>
                </div>
                <div>
                    <ul>
                        <li>getSnapshotBeforeUpdate</li>
                    </ul>
                    <div>
                        <GetSnapshotBeforeUpdate />
                    </div>
                </div>
                <div>
                    <ul>
                        <li>componentDidUpdate</li>
                    </ul>
                    <div>
                        <ComponentDidUpdate />
                    </div>
                </div>
            </div>
            <div>
                <div>
                    <div>
                        <ul>
                            <li>componentWillUnmount</li>
                        </ul>
                        <div>
                            <ComponentWillUnmount />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ExibirComponente;