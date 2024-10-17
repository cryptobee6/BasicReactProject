import './TextInput.css';
import { Input } from '@chakra-ui/react'

export const TextInput = ({onChange}) => <Input className="text-input" placeholder="Search recipes" Color="white" bgColor="white" onChange={onChange} width="auto"></Input>;
