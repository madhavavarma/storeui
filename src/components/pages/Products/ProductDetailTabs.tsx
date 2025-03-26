import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"

export function ProductDetailTabs() {
  return (
    <Tabs defaultValue="details" className="w-full min-h-">
  
  
  <TabsContent value="details">
    <Card>
      <CardHeader>
        <CardTitle>Description</CardTitle>
      </CardHeader>
      <CardContent className="text-gray-700 mt-2">
        {/* {product.description} */}
      </CardContent>
    </Card>
  </TabsContent>

  <TabsContent value="ingredients">
    <Card>
      <CardHeader>
        <CardTitle>Ingredients</CardTitle>
      </CardHeader>
      <CardContent className="text-gray-700 mt-2">
        <ul className="list-disc pl-5">
          <li>Ingredient 1</li>
          <li>Ingredient 2</li>
          <li>Ingredient 3</li>
        </ul>
      </CardContent>
    </Card>
  </TabsContent>

  <TabsContent value="reviews">
    <Card>
      <CardHeader>
        <CardTitle>Reviews</CardTitle>
      </CardHeader>
      <CardContent className="text-gray-700 mt-2">
        <p>No reviews yet. Be the first to review this product!</p>
      </CardContent>
    </Card>
  </TabsContent>

  <TabsContent value="images">
    <Card>
      <CardHeader>
        <CardTitle>Reviews</CardTitle>
      </CardHeader>
      <CardContent className="text-gray-700 mt-2">
        <p>No reviews yet. Be the first to review this product!</p>
      </CardContent>
    </Card>
  </TabsContent>

  <TabsList className="grid w-full grid-cols-4">
    <TabsTrigger value="details">Details</TabsTrigger>
    <TabsTrigger value="ingredients">Ingredients</TabsTrigger>
    <TabsTrigger value="reviews">Reviews</TabsTrigger>
    <TabsTrigger value="images">Images</TabsTrigger>
  </TabsList>
</Tabs>

  )
}
