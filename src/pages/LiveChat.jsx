import { Breadcrumbs, List, ListItem } from "@material-tailwind/react";
import {Avatar,Input} from "@material-tailwind/react";
const LiveChat = () => {
  return (
    <aside>
      <div className="grid justify-items-center">
        <Breadcrumbs>
          <a href="#" className="opacity-60">
            Home
          </a>
          <a href="#" className="opacity-60">
            Contact Support
          </a>
          <a href="#">Live Chat</a>
        </Breadcrumbs>
      </div>
      <div>
        <p className="text-3xl mt-5 mb-5 text-primary font-inria">Live Support Chat</p>
        <p>You are chatting with support team</p>
      </div>
      <hr className="h-px my-3 bg-gray-200 border-0 dark:bg-gray-700"/>
      <List>
        <ListItem className="flex gap-6">
        <Avatar src="data:image/png;base64,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" alt="avatar" />
          <div>
            <p>Support Team</p>
            <p>Lorem ipsum dolor sit amet consector</p>
          </div>
        </ListItem>
        <ListItem className="flex gap-6">
        <Avatar src="https://randomuser.me/api/portraits/men/69.jpg" alt="avatar" />
          <div>
            <p>You</p>
            <p>Lorem ipsum dolor sit amet consector</p>
          </div>
        </ListItem>
      
      </List>
      <div className="w-auto">
      <Input label="Input With Icon" icon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#339FDE" className="w-6 h-6 cursor-pointer -rotate-45 ">
  <path strokeLinecap="round" strokeLinejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
</svg>
} />
    </div>
    </aside>
  );
};

export default LiveChat;
