/**
 * Consider this like a WQ of thoughts.
 * Thoughts can be categorized. the default here is "Thoughts" but a user can
 *  chose to swipe to different categories like "ideas" or "todos". (All of witch are Thoughts)
 * This component should take a "Category" as its property and return a container that filters those thoughts.
 * A HOC will likely pass the necessary data in to summon multiple of these and allow different amount of "Thought Containers"
 *  on different screen sizes.
 */
import React from 'react';
import styled from 'styled-components';
import DefaultLayout from './components/DefaultLayout';

interface Props {
   category: string;
}

const Container = styled.div``;

const Thoughts: React.FC<Props> = (props: Props) => {
   const { category } = props;

   switch (category) {
      default:
         return <DefaultLayout category='Thought' />;
   }
};

export default Thoughts;
