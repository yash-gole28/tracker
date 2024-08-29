import React, { useEffect, useState } from 'react';
import Navbar from '../../components/navbar/Navbar';
import {
    Box,
    Typography,
    TextField,
    Button,
    MenuItem,
    Select,
    FormControl,
    InputLabel,
    FormHelperText,
    SelectChangeEvent
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { API } from '../../network 1';
import { apiList } from '../../apiList';
import { useLocation } from 'react-router-dom';

interface DataStructure {
    title: string;
    description: string;
    price: string;
    category: string[];
    images: string[]; // Changed from string to string[]
    brand: string;
    tags: string[];
    id: string;
    productId:string;
}

const UpdateProduct = () => {
    const [productData, setProductData] = useState<DataStructure>({
        title: '',
        description: '',
        price: '',
        category: [],
        images: [], // Initialize as an empty array
        brand: '',
        tags: [],
        id: '66cc5937ab4695ef56aadf32',
        productId:'66cf0402d88711b490220390'
    });
    const [categories, setCategories] = useState<string[]>(['Electronics', 'Clothing', 'Accessories']); // Example categories
    const theme = useTheme();
    const location = useLocation()
    const titleData = location.state?.title

    // Handle input changes
    const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value} = event.target;

        setProductData((prevState) => ({
            ...prevState,
            [name]: value
        }));
    };

    // Handle category changes (for Select element with multiple values)
    const handleCategoryChange = (event: SelectChangeEvent<string[]>) => {
        setProductData((prevState) => ({
            ...prevState,
            category: event.target.value as string[]
        }));
    };

    // Handle image URL changes
    const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        // Split value by comma to handle multiple image URLs
        const imageArray = value.split(',').map(url => url.trim());
        setProductData((prevState) => ({
            ...prevState,
            images: imageArray
        }));
    };
    const handleTagChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        // Split value by comma to handle multiple image URLs
        const tagArray = value.split(',').map(url => url.trim());
        setProductData((prevState) => ({
            ...prevState,
            tags: tagArray
        }));
    };
    const getProductData = async()=>{
        try{
            const url = apiList.getProduct
            const response = await API.get(url , {id:'66cf0402d88711b490220390'})
            if(response){
                // console.log(response.data)
                setProductData((prevState) => ({
                    ...prevState,
                    ...response.data.data // Assuming response.data.data contains the product data
                }));
            }
        }catch(error){
            console.error(error);
        }
    }
    // Handle form submission
    const onSubmit = async () => {
        console.log('Form Data:', productData);
        try {
            const url = apiList.updateProduct;
            const response = await API.put(url, { data: productData });
            if (response) {
                getProductData()
            }
        } catch (error) {
            console.error(error);
        }
    };
    useEffect(()=>{
        getProductData()
    },[])
    return (
        <Box sx={{ display: 'flex', justifyContent: 'end' }}>
            <Navbar setOpenState={() => { }} />
            <Box
                sx={{
                    width: { xs: '100%', md: 'calc(100% - 240px)' },
                    transition: theme.transitions.create('width', {
                        easing: theme.transitions.easing.sharp,
                        duration: theme.transitions.duration.standard,
                    }),
                    mt: '80px',
                    px: 3
                }}
            >
                <Box>
                    <Typography variant='h6'>update Product</Typography>
                    <Typography variant='h6'>{titleData}</Typography>
                    <Box component="form" sx={{ mt: 2, width: '100%' }}>
                        <TextField
                            fullWidth
                            margin="normal"
                            label="Title"
                            name="title"
                            value={productData.title}
                            onChange={handleChange}
                            required
                        />
                        <TextField
                            fullWidth
                            margin="normal"
                            label="Description"
                            name="description"
                            value={productData.description}
                            onChange={handleChange}
                            required
                        />
                        <TextField
                            fullWidth
                            margin="normal"
                            label="Brand"
                            name="brand"
                            value={productData.brand}
                            onChange={handleChange}
                            required
                        />
                        <TextField
                            fullWidth
                            margin="normal"
                            label="Price"
                            name="price"
                            type="number"
                            value={productData.price}
                            onChange={handleChange}
                            required
                        />
                        <FormControl fullWidth margin="normal">
                            <InputLabel>Category</InputLabel>
                            <Select
                                multiple
                                name="category"
                                value={productData.category}
                                onChange={handleCategoryChange}
                                renderValue={(selected) => (selected as string[]).join(', ')}
                                required
                            >
                                {categories.map((category) => (
                                    <MenuItem key={category} value={category}>
                                        {category}
                                    </MenuItem>
                                ))}
                            </Select>
                            <FormHelperText>Select product categories</FormHelperText>
                        </FormControl>
                        <TextField
                            fullWidth
                            margin="normal"
                            label="Image URLs (comma separated)"
                            name="images"
                            value={productData.images.join(', ')} // Display array as comma-separated string
                            onChange={handleImageChange}
                        />
                        <TextField
                            fullWidth
                            margin="normal"
                            label="tags(comma separated)"
                            name="tags"
                            value={productData.tags.join(', ')} // Display array as comma-separated string
                            onChange={handleTagChange}
                        />
                    
                        <Button
                            variant="contained"
                            color="primary"
                            onClick={onSubmit}
                            sx={{ mt: 2 }}
                        >
                            Add Product
                        </Button>
                    </Box>
                </Box>

            </Box>
        </Box>
    )
}

export default UpdateProduct