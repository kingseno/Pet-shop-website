import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import { Icon, Col, Card, Row, Pagination } from 'antd';
import ImageSlider from '../../../utils/ImageSlider';
import CheckBox from './Sections/CheckBox';
import RadioBox from './Sections/RadioBox';
import { pets, price } from './Sections/Datas';
import SearchFeature from './Sections/SearchFeature';

const { Meta } = Card;

function PetFoodLandingPage() {

    const [Products, setProducts] = useState([])
    const [Skip, setSkip] = useState(0)
    const [Limit, setLimit] = useState(8)
    const [PostSize, setPostSize] = useState()
    const [SearchTerms, setSearchTerms] = useState("")
    const [TotalItem, setTotalItem] = useState(0)

    const [Filters, setFilters] = useState({
        pets: [],
        price: []
    })

    useEffect(() => {

        const variables = {
            skip: Skip,
            limit: Limit,
            loadMore: false
        }

        getProducts(variables)
        getTotalItem()

    }, [])

    // const getProducts = (variables) => {
    //     Axios.post('/api/product/getProducts', variables)
    //         .then(response => {
    //             if (response.data.success) {
    //                 if (variables.loadMore) {
    //                     setProducts([...Products, ...response.data.products])
    //                 } else {
    //                     setProducts(response.data.products)
    //                 }
    //                 setPostSize(response.data.postSize)
    //             } else {
    //                 alert('Failed to fetch product')
    //             }
    //         })
    // }

    const getProducts = (variables) => {
        Axios.post('/api/product/getProducts', variables)
            .then(response => {
                if (response.data.success) {
                    setProducts(response.data.products)
                } else {
                    alert('Failed to fetch product')
                }
            })
    }

    // const onLoadMore = () => {
    //     let skip = Skip + Limit;

    //     const variables = {
    //         skip: skip,
    //         limit: Limit,
    //         loadMore: true

    //     }
    //     getProducts(variables)
    //     setSkip(skip)
    // }
    
    const getTotalItem = () => {
        Axios.get('/api/product/getTotalItem')
        .then(response => {
            if (response.data.success) {
                setTotalItem(response.data.totalItem)
            } else {
                alert('Failed to get total item')
            }         
        });
    }
    

    const onChangePageNumber = (pageNumber) => {
        let skip = (pageNumber - 1) * Limit;

        const variables = {
            skip: skip,
            limit: Limit,
            loadMore: true

        }
        getProducts(variables)
        setSkip(skip)
    }

    const renderCards = Products.map((product, index) => {

        return <Col lg={6} md={8} xs={24}>
            <Card
                hoverable={true}
                cover={<a href={`/product/pet/${product._id}`} > <ImageSlider images={product.images} /></a>}
            >
                <Meta
                    title={product.title}
                    description={`$${product.price}`}
                />
            </Card>
        </Col>
    })

    const showFilteredResults = (filters) => {

        const variables = {
            skip: 0,
            limit: Limit,
            filters: filters

        }
        getProducts(variables)
        setSkip(0)

    }
    const handlePrice = (value) => {
        const data = price;
        let array = [];

        for (let key in data) {

            if (data[key]._id === parseInt(value, 10)) {
                array = data[key].array;
            }
        }
        // console.log('array', array)
        return array
    }
    
    const handleFilters = (filters, category) => {
        const newFilters = { ...Filters }

        newFilters[category] = filters

        if (category === "price") {
            let priceValues = handlePrice(filters)
            newFilters[category] = priceValues
        }

        // console.log(newFilters)

        showFilteredResults(newFilters)
        setFilters(newFilters)
    }

    const updateSearchTerms = (newSearchTerm) => {

        const variables = {
            skip: 0,
            limit: Limit,
            filters: Filters,
            searchTerm: newSearchTerm
        }

        setSkip(0)
        setSearchTerms(newSearchTerm)

        getProducts(variables)
    }

    return (
        <div style={{ width: '75%', margin: '3rem auto' }}>
            <div style={{ textAlign: 'center' }}>
                <h2>  Pet food  <Icon type="rocket" />  </h2>
            </div>


            {/* Filter  */}
            <Row gutter={[16, 16]}>
                <Col lg={12} xs={24} >
                    <CheckBox
                        list={pets}
                        handleFilters={filters => handleFilters(filters, "pets")}
                    />
                </Col>
                <Col lg={12} xs={24}>
                    <RadioBox
                        list={price}
                        handleFilters={filters => handleFilters(filters, "price")}
                    />
                </Col>
            </Row>

            {/* Search  */}
            <div style={{ display: 'flex', justifyContent: 'flex-start', margin: '1rem auto' }}>

                <SearchFeature
                    refreshFunction={updateSearchTerms}
                />

            </div>

            {Products.length === 0 ?
                <div style={{ display: 'flex', height: '300px', justifyContent: 'center', alignItems: 'center' }}>
                    <h2>No Products...</h2>
                </div>:
                <div>

                    <Row gutter={[16, 16]}>

                        {renderCards}

                    </Row>

                </div>
            }
            <br /><br />

            {/* {PostSize >= Limit &&
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <button onClick={onLoadMore}>Load More</button>
                </div>
            } */}
            <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center' }}
            >
                <Pagination 
                    showQuickJumper 
                    defaultCurrent={1} 
                    defaultPageSize={8}
                    total= {TotalItem} 
                    onChange={onChangePageNumber} 
                />
            </div>
            
            
        </div>
    )
}

export default PetFoodLandingPage
