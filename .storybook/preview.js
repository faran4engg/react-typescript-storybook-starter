import { addParameters, addDecorator } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { withMargin } from './decorators/withMargin';
import {INITIAL_VIEWPORTS} from '@storybook/addon-viewport';


addDecorator(withKnobs);
addDecorator(withMargin);
addParameters({
    viewport: {
        viewports: INITIAL_VIEWPORTS,
    },
})

