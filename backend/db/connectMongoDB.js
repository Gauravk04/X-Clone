import mongoose from "mongoose";

const connectMongoDB = async () => {
	try {
		const conn = await mongoose.connect('mongodb+srv://Gaurav:12345@cluster0.suhqs28.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');
		console.log(`MongoDB connected: ${conn.connection.host}`);
	} catch (error) {
		console.error(`Error connection to mongoDB: ${error.message}`);
		process.exit(1);
	}
};

export default connectMongoDB;
