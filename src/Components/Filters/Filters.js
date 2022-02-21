import { Button, Form } from "react-bootstrap";
import { CartState } from '../Context/Context';
import Rating from "../Rating/Rating";
import './Filters.css'

const Filters = () => {
    const {
        productState: { byStock, byFastDelivery, sort, byRating },
        productDispatch,
    } = CartState();

    // make state for rating

    return (
        <div className="filters">
            <span className="title">Filtros</span>
            <span>
                <Form.Check
                    inline
                    label="Ascendente"
                    name="group1"
                    type="radio"
                    id={`inline-1`}
                    onChange={() =>
                        productDispatch({
                            type: "SORT_BY_PRICE",
                            payload: "lowToHigh",
                        })
                    }
                    checked={sort === "lowToHigh" ? true : false}
                />
            </span>
            <span>
                <Form.Check
                    inline
                    label="Descendente"
                    name="group1"
                    type="radio"
                    id={`inline-2`}
                    onChange={() =>
                        productDispatch({
                            type: "SORT_BY_PRICE",
                            payload: "highToLow",
                        })
                    }
                    checked={sort === "highToLow" ? true : false}
                />
            </span>
            <span>
                <Form.Check
                    inline
                    label="Incluir Agotados"
                    name="group1"
                    type="checkbox"
                    id={`inline-3`}
                    onChange={() =>
                        productDispatch({
                            type: "FILTER_BY_STOCK",
                        })
                    }
                    checked={byStock}
                />
            </span>
            <span>
                <Form.Check
                    inline
                    label="Envios Rapidos"
                    name="group1"
                    type="checkbox"
                    id={`inline-4`}
                    onChange={() =>
                        productDispatch({
                            type: "FILTER_BY_DELIVERY",
                        })
                    }
                    checked={byFastDelivery}
                />
            </span>
            <span>
                <label style={{ paddingRight: 10 }}>Rating: </label>
                <Rating
                    rating={byRating}
                    onClick={(i) =>
                        productDispatch({
                            type: "FILTER_BY_RATING",
                            payload: i + 1,
                        })
                    }
                    style={{ cursor: "pointer" }}
                />
            </span>
            <Button
                variant="light"
                onClick={() =>
                    productDispatch({
                        type: "CLEAR_FILTERS",
                    })
                }
            >
                Clear Filters
            </Button>
        </div>
    );
};

export default Filters;
