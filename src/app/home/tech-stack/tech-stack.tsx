'use client';

import { Chip, Grid, Center } from '@mantine/core';
import { TechChipProps, TechStackProps } from './types';

function TechChip(props: TechChipProps) {
  return <Chip defaultChecked>{props.label}</Chip>;
}

export function TechStack(props: TechStackProps) {
  const { tech } = { ...props };
  return (
    <Center>
      <Grid columns={8} gutter="xs">
        {tech.map((x, index) => (
          <Grid.Col key={index} span={'auto'}>
            <TechChip label={x} />
          </Grid.Col>
        ))}
      </Grid>
    </Center>
  );
}
