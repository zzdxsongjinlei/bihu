//提取axios，不用全局响应
import axios from 'axios'
import {Message ,Loading} from 'element-ui'
const service=axios.create({
	timeout:5000
});
export default service
//链接客户端请求配置，