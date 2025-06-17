
import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Camera, Upload, X, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface ImageUploadProps {
  onImageSelect: (file: File) => void;
  maxSizeMB?: number;
  acceptedTypes?: string[];
}

const ImageUpload = ({ 
  onImageSelect, 
  maxSizeMB = 10, 
  acceptedTypes = ["image/jpeg", "image/png", "image/webp"]
}: ImageUploadProps) => {
  const { toast } = useToast();
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [uploadStatus, setUploadStatus] = useState<"idle" | "uploading" | "success" | "error">("idle");
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    // Validate file type
    if (!acceptedTypes.includes(file.type)) {
      toast({
        title: "Invalid file type",
        description: `Please select a ${acceptedTypes.join(", ")} file.`,
        variant: "destructive"
      });
      return;
    }

    // Validate file size
    const fileSizeMB = file.size / (1024 * 1024);
    if (fileSizeMB > maxSizeMB) {
      toast({
        title: "File too large",
        description: `Please select a file smaller than ${maxSizeMB}MB.`,
        variant: "destructive"
      });
      return;
    }

    setSelectedImage(file);
    
    // Create preview URL
    const url = URL.createObjectURL(file);
    setPreviewUrl(url);

    // Simulate upload process
    setUploadStatus("uploading");
    setTimeout(() => {
      setUploadStatus("success");
      onImageSelect(file);
      toast({
        title: "Image uploaded successfully!",
        description: "Your waste report image has been uploaded.",
      });
    }, 2000);
  };

  const handleCameraCapture = () => {
    // Simulate camera access
    toast({
      title: "Camera Feature",
      description: "Camera functionality would open here in a real app.",
    });
  };

  const removeImage = () => {
    setSelectedImage(null);
    setPreviewUrl(null);
    setUploadStatus("idle");
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  return (
    <Card className="w-full">
      <CardContent className="p-6">
        {!selectedImage ? (
          <div className="space-y-4">
            <div 
              className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-green-400 transition-colors cursor-pointer"
              onClick={() => fileInputRef.current?.click()}
            >
              <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">Upload Waste Photo</h3>
              <p className="text-sm text-gray-600 mb-4">
                Drag and drop your image here, or click to browse
              </p>
              <p className="text-xs text-gray-500">
                Supports: JPEG, PNG, WebP (max {maxSizeMB}MB)
              </p>
              
              <input
                ref={fileInputRef}
                type="file"
                accept={acceptedTypes.join(",")}
                onChange={handleFileSelect}
                className="hidden"
              />
            </div>

            <div className="flex gap-2">
              <Button 
                variant="outline" 
                className="flex-1"
                onClick={() => fileInputRef.current?.click()}
              >
                <Upload className="w-4 h-4 mr-2" />
                Choose File
              </Button>
              <Button 
                variant="outline"
                className="flex-1"
                onClick={handleCameraCapture}
              >
                <Camera className="w-4 h-4 mr-2" />
                Take Photo
              </Button>
            </div>
          </div>
        ) : (
          <div className="space-y-4">
            <div className="relative">
              <img
                src={previewUrl || ""}
                alt="Selected waste"
                className="w-full h-64 object-cover rounded-lg"
              />
              <Button
                size="sm"
                variant="destructive"
                className="absolute top-2 right-2"
                onClick={removeImage}
              >
                <X className="w-4 h-4" />
              </Button>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="text-sm font-medium">{selectedImage.name}</div>
                <div className="text-xs text-gray-500">
                  ({(selectedImage.size / 1024 / 1024).toFixed(1)} MB)
                </div>
              </div>
              
              {uploadStatus === "uploading" && (
                <div className="flex items-center gap-2 text-blue-600">
                  <div className="w-4 h-4 border-2 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
                  <span className="text-sm">Uploading...</span>
                </div>
              )}
              
              {uploadStatus === "success" && (
                <div className="flex items-center gap-2 text-green-600">
                  <CheckCircle className="w-4 h-4" />
                  <span className="text-sm">Uploaded</span>
                </div>
              )}
            </div>

            <Button 
              variant="outline" 
              className="w-full"
              onClick={() => fileInputRef.current?.click()}
            >
              <Upload className="w-4 h-4 mr-2" />
              Choose Different Image
            </Button>
            
            <input
              ref={fileInputRef}
              type="file"
              accept={acceptedTypes.join(",")}
              onChange={handleFileSelect}
              className="hidden"
            />
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default ImageUpload;
