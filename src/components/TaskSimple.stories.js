import React from "react";
import TaskSimple from "./TaskSimple";

export default {
    component: TaskSimple,
    title: "TaskSimple",
};

const Template = (args) => <TaskSimple {...args} />;
export const Default = Template.bind({});
Default.args =  {title:"aaaaa"};
