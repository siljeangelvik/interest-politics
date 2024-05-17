import React from 'react';

export interface Route {
    path: string,
    component: React.FC;
}