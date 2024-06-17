import { Card, CardHeader, CardBody, Typography } from '@material-tailwind/react';
import PropTypes from 'prop-types';
import { Skills } from './Skills';
import { SocialMedia } from './SocialMedia';

function NewVirtualCard({ props }) {
  return (
    <Card className="w-full max-w-[48rem] flex-row hidden md:flex">
      <CardHeader shadow={false} floated={false} className="m-0 w-2/5 shrink-0 rounded-r-none">
        <img src={props.image} alt="card-image" className="h-full w-full object-cover" />
      </CardHeader>
      <CardBody>
        <Typography variant="h6" color="gray" className="mb-4 uppercase">
          {props.name}
        </Typography>
        <Typography variant="h4" color="blue-gray" className="mb-2">
          {props.positions && props.positions.join(' | ')}
        </Typography>
        <Typography color="gray" className="mb-8 font-normal">
          {props.story}
        </Typography>
        <Skills skills={props.skills} />
        <Typography className="mt-5 italic">~ {props.motto} ~</Typography>
        <SocialMedia props={props.socialMedia} />
      </CardBody>
    </Card>
  );
}

NewVirtualCard.propTypes = {
  name: PropTypes.string,
  positions: PropTypes.arrayOf(PropTypes.string),
  story: PropTypes.string,
  motto: PropTypes.string,
  skills: PropTypes.arrayOf(PropTypes.string),
  image: PropTypes.string,
  socialMedia: PropTypes.arrayOf(
    PropTypes.shape({
      link: PropTypes.string,
      image: PropTypes.string,
      name: PropTypes.string
    })
  ),
  props: PropTypes.object
};

export default NewVirtualCard;
